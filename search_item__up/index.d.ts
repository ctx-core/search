import type { search_params_T } from '../_types/index.js'
/**
 * Returns a `search_item__up` function, which sets `idx` & `__item` to the previous value
 */
export declare function search_item__up<
	I extends readonly unknown[] = readonly unknown[]
>({ a_, idx_, }:search_params_T<I>):void
export {
	search_item__up as up_search_item,
}
