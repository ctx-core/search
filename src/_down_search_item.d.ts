import type { search_params_type } from './search_params_type';
/**
 * Returns a `down_search_item` function, which sets `idx` & `__item` to the next value
 */
export declare function _down_search_item<I extends unknown = unknown>({ a1, idx, }: search_params_type<I>): () => void;
