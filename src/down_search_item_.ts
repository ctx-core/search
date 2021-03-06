import { next_idx_ } from '@ctx-core/array'
import type { search_params_I } from './search_params_I.js'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 */
export function down_search_item_<I extends unknown = unknown>({ a$, idx$, }:search_params_I<I>) {
	return ()=>{
		const a:I[] = a$._ || []
		const idx = next_idx_(a.length, idx$._ || 0)
		idx$._ = idx
	}
}
