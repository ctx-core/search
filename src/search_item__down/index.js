import { next_idx_ } from '@ctx-core/array'
/**
 * Returns a `search_item__down` function, which sets `idx` to the next value
 * @param {import('../_types').search_params_T}params
 */
export function search_item__down(params) {
	const { a_, idx_ } = params
	const a = a_.$ || []
	const idx = next_idx_(a.length, idx_.$ || 0)
	idx_.$ = idx
}
export {
	search_item__down as down_search_item,
}
