import { prev_idx_ } from '@ctx-core/array'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
 */
export function up_search_item_({ a$, idx$ }) {
	return ()=>{
		const a = a$.$ || []
		const idx = prev_idx_(a.length, idx$.$ || 0)
		idx$.set(idx)
	}
}
