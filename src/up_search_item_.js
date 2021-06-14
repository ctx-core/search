import { prev_idx_ } from '@ctx-core/array';
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export function up_search_item_({ a$, idx$, }) {
    return () => {
        const a = a$._ || [];
        const idx = prev_idx_(a.length, idx$._ || 0);
        idx$.set(idx);
    };
}
//# sourceMappingURL=src/up_search_item_.js.map