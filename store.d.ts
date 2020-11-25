import { Readable, Writable } from '@ctx-core/store';
declare type Opts__store__search_result<S extends Readable<unknown>> = {
    __query: S;
    _data: ({ query: unknown }: {
        query: any;
    }) => Promise<any>;
    clear?: () => void;
};
export interface $search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> {
    done: boolean;
    loading: boolean;
    query: Q;
    data?: D;
}
export declare type search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> = Readable<$search_result_type<Q, D>>;
export declare function _search_result_store<S extends Readable<unknown>>({ __query, _data, clear }: Opts__store__search_result<S>): search_result_type<unknown, unknown[]>;
export declare const _store__search_result: typeof _search_result_store;
/**
 * Returns a `up__item__search` function, which sets `__idx` & `__item` to the previous value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export declare function _up__item__search({ __a1, __idx, }: search_params_type): () => void;
/**
 * Returns a `down__item__search` function, which sets `__idx` & `__item` to the next value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export declare function _down__item__search({ __a1, __idx, }: search_params_type): () => void;
export interface search_params_type {
    __a1: Readable<unknown[]>;
    __idx: Writable<number>;
}
export {};
