import { prev_idx_ } from '@ctx-core/array'
import type { search_params_I } from './search_params_I'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export function up_search_item_<I extends unknown = unknown>({ a$, idx$, }:search_params_I<I>) {
	return ()=>{
		const a:I[] = a$._ || []
		const idx = prev_idx_(a.length, idx$._ || 0)
		idx$.set(idx)
	}
}
