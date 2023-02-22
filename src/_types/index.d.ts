import type { ReadableAtom_, WritableAtom_ } from '@ctx-core/nanostores'
export interface search_params_T<I extends unknown[] = unknown[]> {
	a_:ReadableAtom_<I>
	idx_:WritableAtom_<number>
}
export declare type search_params_I<I extends unknown[] = unknown[]> = search_params_T<I>
