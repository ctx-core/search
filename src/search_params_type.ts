import type { Readable, Writable } from '@ctx-core/store'
export interface search_params_type<I extends unknown = unknown> {
	a1:Readable<I[]>
	idx:Writable<number>
}
