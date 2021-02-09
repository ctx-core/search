import { _next_idx } from '@ctx-core/array'
import { get } from '@ctx-core/store'
import type { search_params_type } from './search_params_type'
/**
 * Returns a `down_search_item` function, which sets `idx` & `__item` to the next value
 */
export function _down_search_item<I extends unknown = unknown>({ a1, idx, }:search_params_type<I>) {
	return ()=>{
		const $a1:I[] = get(a1) || []
		const $idx = _next_idx($a1.length, get(idx) || 0)
		idx.set($idx)
	}
}