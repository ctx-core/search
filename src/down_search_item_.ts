import { _next_idx } from '@ctx-core/array'
import type { search_params_T } from './search_params_T'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 */
export function down_search_item_<I extends unknown = unknown>({ a1$, idx$, }:search_params_T<I>) {
	return ()=>{
		const $a1:I[] = a1$._ || []
		const $idx = _next_idx($a1.length, idx$._ || 0)
		idx$._ = $idx
	}
}
