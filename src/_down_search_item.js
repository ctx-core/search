import { _next_idx } from '@ctx-core/array';
import { get } from '@ctx-core/store';
/**
 * Returns a `down_search_item` function, which sets `idx` & `__item` to the next value
 */
export function _down_search_item({ a1, idx, }) {
    return () => {
        const $a1 = get(a1) || [];
        const $idx = _next_idx($a1.length, get(idx) || 0);
        idx.set($idx);
    };
}
