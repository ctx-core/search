import type { search_params_I } from './_types'
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
 */
export declare function up_search_item_<I extends unknown = unknown>({ a$, idx$, }:search_params_I<I>):()=>void;
