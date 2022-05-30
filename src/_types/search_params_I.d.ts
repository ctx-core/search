import type { ReadableAtom_, WritableAtom_ } from '@ctx-core/nanostores'
export interface search_params_I<I extends unknown = unknown> {
	a$:ReadableAtom_<readonly I[]>
	idx$:WritableAtom_<number>
}
