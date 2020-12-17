import { Readable } from '@ctx-core/store';
export declare function _search_result_store<S extends Readable<unknown>>({ __query, _data, clear }: search_result_opts_type<S>): search_result_type<unknown, unknown[]>;
export interface search_result_opts_type<S extends Readable<unknown>> {
    __query: S;
    _data: ({ query: unknown }: {
        query: any;
    }) => Promise<any>;
    clear?: () => void;
}
export interface $search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> {
    done: boolean;
    loading: boolean;
    query: Q;
    data?: D;
}
export interface search_result_type<Q extends unknown = unknown, D extends unknown[] = unknown[]> extends Readable<$search_result_type<Q, D>> {
}
export { _search_result_store as _store__search_result };
