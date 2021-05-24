import { derived, get } from '@ctx-core/store';
export function _search_result_store({ query, _data, clear }) {
    const search_store = derived(query, ($query, in_set) => {
        const set = in_set;
        if (!$query) {
            (clear || (() => {
                set({ done: true, loading: false, query, data: [] });
            }))();
            return;
        }
        const previous_search = get(search_store);
        const previous_query = previous_search && previous_search.query;
        if (previous_query === $query) {
            return;
        }
        set({
            done: false,
            loading: true,
            query,
        });
        (async () => {
            const data = await _data({ $query });
            if ($query === get(query)) {
                set({
                    done: true,
                    loading: false,
                    query,
                    data,
                });
            }
        })();
    });
    return search_store;
}
export { _search_result_store as _store__search_result };
