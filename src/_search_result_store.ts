import { derived, get, Readable } from '@ctx-core/store'
export function _search_result_store<I extends unknown = unknown, O extends unknown = unknown>(
	{
		query, _data, clear
	}:search_result_opts_type<I, O>
):search_result_store_type<I, O> {
	const search_store = derived<Readable<I>, $search_result_store_type<I, O>>(
		query,
		(
			$query:I,
			in_set
		)=>{
			const set = in_set as (value:$search_result_store_type)=>void
			if (!$query) {
				(clear || (()=>{
					set(
						{ done: true, loading: false, query, data: [] } as $search_result_store_type<I, O>
					)
				}))()
				return
			}
			const previous_search:$search_result_store_type<I, O> = get(search_store)
			const previous_query = previous_search && previous_search.query
			if (previous_query === $query) {
				return
			}
			set({
				done: false,
				loading: true,
				query,
			} as $search_result_store_type<I, O>)
			;(async ()=>{
				const data = await _data({ $query })
				if ($query === get(query)) {
					set({
						done: true,
						loading: false,
						query,
						data,
					} as $search_result_store_type<I, O>)
				}
			})()
		})
	return search_store
}
export interface search_result_opts_type<I extends unknown = unknown, O extends unknown = unknown> {
	query:Readable<I>
	_data:({ $query: I })=>Promise<O[]>
	clear?:()=>void
}
export interface $search_result_store_type<I extends unknown = unknown, O extends unknown = unknown> {
	done:boolean
	loading:boolean
	query:Readable<I>
	data?:O[]
}
export interface search_result_store_type<I extends unknown = unknown, O extends unknown = unknown>
	extends Readable<$search_result_store_type<I, O>> {}
export {
	_search_result_store as _store__search_result
}
