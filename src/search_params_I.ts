import type { Readable$, Writable$ } from '@ctx-core/store'
export interface search_params_I<I extends unknown = unknown> {
	a$:Readable$<I[]>
	idx$:Writable$<number>
}
