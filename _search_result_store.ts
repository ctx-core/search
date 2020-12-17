import { derived, get, Readable } from '@ctx-core/store'
export function _search_result_store<S extends Readable<unknown>>(
	{
		__query,
		_data,
		clear
	}:search_result_opts_type<S>
) {
	const search_store = derived<S, $search_result_type>(
		__query,
		(
			query,
			in_set
		)=>{
			const set = in_set as (value:$search_result_type)=>void
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
export interface search_result_opts_type<S extends Readable<unknown>> {
	__query:S
	_data:({ query: unknown })=>Promise<any>
	clear?:()=>void
}
export interface $search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> {
	done:boolean
	loading:boolean
	query:Q
	data?:D
}
export interface search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]>
	extends Readable<$search_result_type<Q, D>> {}
export {
	_search_result_store as _store__search_result
}
