import { next_idx_ } from '@ctx-core/array'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 */
export function down_search_item_({ a$, idx$ }) {
	return ()=>{
		const a = a$.$ || []
		const idx = next_idx_(a.length, idx$.$ || 0)
		idx$.$ = idx
	}
}
