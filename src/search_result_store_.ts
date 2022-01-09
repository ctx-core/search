import { run } from '@ctx-core/function'
import { setter_computed$, ReadableAtom$ } from '@ctx-core/nanostores'
export function search_result_store_<I extends unknown = unknown, O extends unknown = unknown>(
	{
		query$, data_, clear
	}:search_result_opts_I<I, O>
):search_result$_T<I, O> {
	let current_search_store:search_result_T<I, O>
	const search_store$ = setter_computed$<search_result_T<I, O>, ReadableAtom$<I>>(
		query$,
		(query:I, _set)=>{
			// const set = in_set as (value:search_result_T)=>void
			if (!query) {
				(clear || (()=>{
					set(_set, {
						done: true, loading: false, query$, data: []
					} as search_result_T<I, O>)
				}))()
				return
			}
			if (current_search_store?.query$ === query) {
				return
			}
			set(_set, {
				done: false,
				loading: true,
				query$,
			} as search_result_T<I, O>)
			run(async ()=>{
				const data = await data_({ query })
				if (query === query$.$) {
					set(_set, {
						done: true,
						loading: false,
						query$,
						data,
					} as search_result_T<I, O>)
				}
			}).then()
		})
	return search_store$
	function set(_set:(newValue:search_result_T<I, O>)=>void, search_store:search_result_T<I, O>) {
		current_search_store = search_store
		_set(search_store)
	}
}
export interface search_result_opts_I<I extends unknown = unknown, O extends unknown = unknown> {
	query$:ReadableAtom$<I>
	data_:(params:{ query:I })=>Promise<O[]>
	clear?:()=>void
}
export interface search_result_T<I extends unknown = unknown, O extends unknown = unknown> {
	done:boolean
	loading:boolean
	query$:ReadableAtom$<I>
	data?:O[]
}
export interface search_result$_T<I extends unknown = unknown, O extends unknown = unknown>
	extends ReadableAtom$<search_result_T<I, O>> {}
export {
	search_result_store_ as _store__search_result
}
