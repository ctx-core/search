import type { search_params_I } from './_types'
/**
 * Returns a `down_search_item` function, which sets `idx` to the next value
 */
export declare function down_search_item_<I extends unknown = unknown>({ a$, idx$, }:search_params_I<I>):()=>void;
