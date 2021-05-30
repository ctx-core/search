import { _prev_idx } from '@ctx-core/array'
import type { search_params_I } from './search_params_I'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export function up_search_item_<I extends unknown = unknown>({ a$, idx$, }:search_params_I<I>) {
	return ()=>{
		const $a1:I[] = a$._ || []
		const $idx = _prev_idx($a1.length, idx$._ || 0)
		idx$.set($idx)
	}
}
