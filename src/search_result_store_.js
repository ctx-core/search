import { derived$ } from '@ctx-core/store';
export function search_result_store_({ query$, data_, clear }) {
    const search_store$ = derived$(query$, (query, in_set) => {
        const set = in_set;
        if (!query) {
            (clear || (() => {
                set({ done: true, loading: false, query$, data: [] });
            }))();
            return;
        }
        const previous_search = search_store$._;
        const previous_query = previous_search && previous_search.query$;
        if (previous_query === query) {
            return;
        }
        set({
            done: false,
            loading: true,
            query$,
        });
        (async () => {
            const data = await data_({ query });
            if (query === query$._) {
                set({
                    done: true,
                    loading: false,
                    query$,
                    data,
                });
            }
        })();
    });
    return search_store$;
}
export { search_result_store_ as _store__search_result };
//# sourceMappingURL=src/search_result_store_.js.map