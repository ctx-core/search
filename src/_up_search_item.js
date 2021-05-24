import { _prev_idx } from '@ctx-core/array';
import { get } from '@ctx-core/store';
/**
 * Returns a `up_search_item` function, which sets `idx` & `__item` to the previous value
y */
export function _up_search_item({ a1, idx, }) {
    return () => {
        const $a1 = get(a1) || [];
        const $idx = _prev_idx($a1.length, get(idx) || 0);
        idx.set($idx);
    };
}
