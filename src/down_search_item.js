import { next_idx_ } from '@ctx-core/array'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 * @param {search_params_I}params
 */
export function down_search_item(params) {
	const { a$, idx$ } = params
	const a = a$.$ || []
	const idx = next_idx_(a.length, idx$.$ || 0)
	idx$.$ = idx
}
