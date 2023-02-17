import { next_idx_ } from '@ctx-core/array'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 * @param {import('../_types').search_params_T}params
 */
export function down_search_item(params) {
	const { a_, idx_ } = params
	const a = a_.$ || []
	const idx = next_idx_(a.length, idx_.$ || 0)
	idx_.$ = idx
}
