import { Readable } from '@ctx-core/store';
export declare function _search_result_store<I extends unknown = unknown, O extends unknown = unknown>({ query, _data, clear }: search_result_opts_type<I, O>): search_result_store_type<I, O>;
export interface search_result_opts_type<I extends unknown = unknown, O extends unknown = unknown> {
    query: Readable<I>;
    _data: ({ $query: I }: {
        $query: any;
    }) => Promise<O[]>;
    clear?: () => void;
}
export interface $search_result_store_type<I extends unknown = unknown, O extends unknown = unknown> {
    done: boolean;
    loading: boolean;
    query: Readable<I>;
    data?: O[];
}
export interface search_result_store_type<I extends unknown = unknown, O extends unknown = unknown> extends Readable<$search_result_store_type<I, O>> {
}
export { _search_result_store as _store__search_result };
