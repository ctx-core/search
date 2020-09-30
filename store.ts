import { derived, get, Readable, Writable } from '@ctx-core/store'
import { _idx__next, _idx__prev } from '@ctx-core/array'
type Opts__store__search_result<S extends Readable<unknown>> = {
	__query:S
	_data:({ query: unknown })=>Promise<any>
	clear?:()=>void
}
export type $search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> = {
	done:boolean
	loading:boolean
	query:Q
	data?:D
}
export type search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> =
	Readable<$search_result_type<Q, D>>
export function _search_result_store<S extends Readable<unknown>>(
	{
		__query,
		_data,
		clear
	}:Opts__store__search_result<S>
) {
	const search_store = derived<S, $search_result_type>(
		__query,
		(
			query,
			in_set
		)=>{
			const set = in_set as (value: $search_result_type) => void
			if (!query) {
				(clear || (()=>{
					set({ done: true, loading: false, query, data: [] })
				}))()
				return
			}
			const previous_search = get(search_store) as $search_result_type
			const previous_query = previous_search && previous_search.query
			if (previous_query === query) {
				return
			}
			set({
				done: false,
				loading: true,
				query,
			})
			;(async ()=>{
				const data = await _data({ query })
				if (query === get(__query)) {
					set({
						done: true,
						loading: false,
						query,
						data,
					})
				}
			})()
		})
	return search_store as search_result_type
}
export const _store__search_result = _search_result_store
/**
 * Returns a `up__item__search` function, which sets `__idx` & `__item` to the previous value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export function _up__item__search({ __a1, __idx, }: search_params_type) {
	return ()=>{
		const a1 = get(__a1) || []
		const idx = _idx__prev(a1.length, get(__idx) || 0)
		__idx.set(idx)
	}
}
/**
 * Returns a `down__item__search` function, which sets `__idx` & `__item` to the next value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export function _down__item__search({ __a1, __idx, }: search_params_type) {
	return ()=>{
		const a1 = get(__a1) || []
		const idx = _idx__next(a1.length, get(__idx) || 0)
		__idx.set(idx)
	}
}
export type search_params_type = {
	__a1: Readable<unknown[]>
	__idx: Writable<number>
}
