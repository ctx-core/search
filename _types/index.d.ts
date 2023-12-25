import type { memo_T, sig_T } from 'ctx-core/rmemo'
export interface search_params_T<I extends readonly unknown[] = readonly unknown[]> {
	a_:memo_T<I>
	idx_:sig_T<number>
}
export declare type search_params_I<I extends unknown[] = unknown[]> = search_params_T<I>
