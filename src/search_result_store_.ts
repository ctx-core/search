import { derived$, Readable$ } from '@ctx-core/store'
export function search_result_store_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
/*@formatter:on*/>(
	{
		query$, data_, clear
	}:search_result_opts_T<I, O>
):search_result_store_T<I, O> {
	const search_store$ = derived$<Readable$<I>, $search_result_store_T<I, O>>(
		query$,
		(
			query:I,
			in_set
		)=>{
			const set = in_set as (value:$search_result_store_T)=>void
			if (!query) {
				(clear || (()=>{
					set(
						{ done: true, loading: false, query$, data: [] } as $search_result_store_T<I, O>
					)
				}))()
				return
			}
			const previous_search:$search_result_store_T<I, O> = search_store$._
			const previous_query = previous_search && previous_search.query$
			if (previous_query === query) {
				return
			}
			set({
				done: false,
				loading: true,
				query$,
			} as $search_result_store_T<I, O>)
			;(async ()=>{
				const data = await data_({ query })
				if (query === query$._) {
					set({
						done: true,
						loading: false,
						query$,
						data,
					} as $search_result_store_T<I, O>)
				}
			})()
		})
	return search_store$
}
export interface search_result_opts_T<I extends unknown = unknown, O extends unknown = unknown> {
	query$:Readable$<I>
	data_:(params:{ query:I })=>Promise<O[]>
	clear?:()=>void
}
export interface $search_result_store_T<I extends unknown = unknown, O extends unknown = unknown> {
	done:boolean
	loading:boolean
	query$:Readable$<I>
	data?:O[]
}
export interface search_result_store_T<I extends unknown = unknown, O extends unknown = unknown>
	extends Readable$<$search_result_store_T<I, O>> {}
export {
	search_result_store_ as _store__search_result
}
