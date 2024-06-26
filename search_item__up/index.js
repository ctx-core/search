/// <reference types="../types/index.d.ts" />
import { prev_idx_ } from 'ctx-core/array'
/**
 * Returns a `search_item__up` function, which sets `idx` & `__item` to the previous value
 * @param {search_params_T}params
 */
export function search_item__up(params) {
	const { a_, idx_ } = params
	const a = a_() ?? []
	const idx = prev_idx_(a.length, idx_() ?? 0)
	idx_.set(idx)
}
export {
	search_item__up as up_search_item,
}
