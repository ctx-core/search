import type { search_params_T } from '../_types/index.js'
/**
 * Returns a `search_item__down` function, which sets `idx` to the next value
 */
export declare function search_item__down<
	I extends readonly unknown[] = readonly unknown[]
>({ a_, idx_, }:search_params_T<I>):void
export {
	search_item__down as down_search_item,
}
