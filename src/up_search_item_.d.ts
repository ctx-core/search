import type { search_params_I } from './search_params_I';
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export declare function up_search_item_<I extends unknown = unknown>({ a$, idx$, }: search_params_I<I>): () => void;
