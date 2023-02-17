import type { search_params_T } from '../_types'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
 */
export declare function up_search_item<
	I extends unknown = unknown
>({ a_, idx_, }:search_params_T<I>):void
