import { ReadableAtom$ } from '@ctx-core/nanostores'
export declare function search_result_store_<I extends unknown = unknown, O extends unknown = unknown>({ query$, data_, clear, timeout }:search_result_opts_I<I, O>):search_result$_T<I, O>;
export interface search_result_opts_I<I extends unknown = unknown, O extends unknown = unknown> {
	query$:ReadableAtom$<I>;
	data_:(params:{
		query:I;
	})=>Promise<O[]>;
	clear?:()=>void;
	timeout?:number;
}
export interface search_result_T<I extends unknown = unknown, O extends unknown = unknown> {
	done:boolean;
	loading:boolean;
	query$:ReadableAtom$<I>;
	data?:O[];
}
export interface search_result$_T<I extends unknown = unknown, O extends unknown = unknown> extends ReadableAtom$<search_result_T<I, O>> {
}
export { search_result_store_ as _store__search_result }
