import { prev_idx_ } from '@ctx-core/array'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
 * @param {search_params_I}params
 */
export function up_search_item(params) {
	const { a$, idx$ } = params
	const a = a$.$ || []
	const idx = prev_idx_(a.length, idx$.$ || 0)
	idx$.$ = idx
}
