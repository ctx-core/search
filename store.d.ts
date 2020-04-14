import { Readable } from 'svelte/store';
declare type Opts__store__search_result = {
    __query: Readable<any>;
    _data: ({ query: any }: {
        query: any;
    }) => Promise<any>;
    clear?: () => void;
};
export declare function _store__search_result({ __query, _data, clear }: Opts__store__search_result): any;
/**
 * Returns a `up__item__search` function, which sets `__idx` & `__item` to the previous value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export declare function _up__item__search({ __a1, __idx, }: {
    __a1: any;
    __idx: any;
}): () => void;
/**
 * Returns a `down__item__search` function, which sets `__idx` & `__item` to the next value
 * @param {Store} __a1
 * @param {Store} __item
 * @param {Store} __idx
 * @returns {Function}
 */
export declare function _down__item__search({ __a1, __idx, }: {
    __a1: any;
    __idx: any;
}): () => void;
export {};
