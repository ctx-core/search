import { _prev_idx } from '@ctx-core/array'
import type { search_params_T } from './search_params_T'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export function up_search_item_<I extends unknown = unknown>({ a1$, idx$, }:search_params_T<I>) {
	return ()=>{
		const $a1:I[] = a1$._ || []
		const $idx = _prev_idx($a1.length, idx$._ || 0)
		idx$.set($idx)
	}
}
