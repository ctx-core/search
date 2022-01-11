import type { ReadableAtom$, WritableAtom$ } from '@ctx-core/nanostores'
export interface search_params_I<I extends unknown = unknown> {
	a$:ReadableAtom$<I[]>;
	idx$:WritableAtom$<number>;
}
