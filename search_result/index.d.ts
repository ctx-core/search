import type { memo_T } from 'ctx-core/rmemo'
export declare function search_result__new<
	I = unknown,
	O = unknown
>(
	{ query_, data_, clear, timeout }:search_result__params_T<I, O>
):search_store_T<I, O>
export interface search_result__params_T<
	I = unknown,
	O = unknown
> {
	query_:memo_T<I>
	data_:(params:{
		query:I
	})=>Promise<O[]>
	clear?:()=>void
	timeout?:number
}
export type search_result__opts_T<
	I = unknown,
	O = unknown
> = search_result__params_T<I, O>
export declare type search_result_opts_I<
	I = unknown,
	O = unknown
> = search_result__params_T<I, O>
export interface search_result_T<
	I = unknown,
	O = unknown
> {
	done:boolean
	loading:boolean
	query:I
	data?:O[]
}
export type search_result$_T<
	I = unknown,
	O = unknown
> = memo_T<search_result_T<I, O>>
export declare type search_store_T<
	I = unknown,
	O = unknown
> = search_result$_T<I, O>
