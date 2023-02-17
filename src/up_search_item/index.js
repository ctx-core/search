import { prev_idx_ } from '@ctx-core/array'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
 * @param {import('../_types').search_params_T}params
 */
export function up_search_item(params) {
	const { a_, idx_ } = params
	const a = a_.$ || []
	const idx = prev_idx_(a.length, idx_.$ || 0)
	idx_.$ = idx
}
