import type { ReadableAtom, ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function search_result$__new<
	I extends unknown = unknown,
	O extends unknown = unknown
>(
	{ query_, data_, clear, timeout }:search_result__params_T<I, O>
):search_store_T<I, O>
export {
	search_result$__new as search_store__,
	search_result$__new as search_result_store_,
	search_result$__new as _store__search_result,
}
export interface search_result__params_T<
	I extends unknown = unknown,
	O extends unknown = unknown
> {
	query_:ReadableAtom<I>
	data_:(params:{
		query:I
	})=>Promise<O[]>
	clear?:()=>void
	timeout?:number
}
export type search_result__opts_T<
	I extends unknown = unknown,
	O extends unknown = unknown
> = search_result__params_T<I, O>
export declare type search_result_opts_I<
	I extends unknown = unknown,
	O extends unknown = unknown
> = search_result__params_T<I, O>
export interface search_result_T<
	I extends unknown = unknown,
	O extends unknown = unknown
> {
	done:boolean
	loading:boolean
	query:I
	data?:O[]
}
export type search_result$_T<
	I extends unknown = unknown,
	O extends unknown = unknown
> = ReadableAtom_<search_result_T<I, O>>
export declare type search_store_T<
	I extends unknown = unknown,
	O extends unknown = unknown
> = search_result$_T<I, O>
