import { Readable$ } from '@ctx-core/store';
export declare function search_result_store_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>({ query$, data_, clear }: search_result_opts_I<I, O>): search_result$_T<I, O>;
export interface search_result_opts_I<I extends unknown = unknown, O extends unknown = unknown> {
    query$: Readable$<I>;
    data_: (params: {
        query: I;
    }) => Promise<O[]>;
    clear?: () => void;
}
export interface search_result_T<I extends unknown = unknown, O extends unknown = unknown> {
    done: boolean;
    loading: boolean;
    query$: Readable$<I>;
    data?: O[];
}
export interface search_result$_T<I extends unknown = unknown, O extends unknown = unknown> extends Readable$<search_result_T<I, O>> {
}
export { search_result_store_ as _store__search_result };
