import { setter_computed$, ReadableAtom$ } from '@ctx-core/nanostores'
export function search_result_store_<I extends unknown = unknown, O extends unknown = unknown>(
	{
		query$, data_, clear
	}:search_result_opts_I<I, O>
):search_result$_T<I, O> {
	const search_store$ = setter_computed$<search_result_T<I, O>, ReadableAtom$<I>>(
		query$,
		(query:I, set)=>{
			// const set = in_set as (value:search_result_T)=>void
			if (!query) {
				(clear || (()=>{
					set(
						{ done: true, loading: false, query$, data: [] } as search_result_T<I, O>
					)
				}))()
				return
			}
			const previous_search:search_result_T<I, O> = search_store$.$
			const previous_query = previous_search && previous_search.query$
			if (previous_query === query) {
				return
			}
			set({
				done: false,
				loading: true,
				query$,
			} as search_result_T<I, O>)
			;(async ()=>{
				const data = await data_({ query })
				if (query === query$.$) {
					set({
						done: true,
						loading: false,
						query$,
						data,
					} as search_result_T<I, O>)
				}
			})()
		})
	return search_store$
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
