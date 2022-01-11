import { run } from '@ctx-core/function'
import { setter_computed$ } from '@ctx-core/nanostores'
export function search_result_store_({ query$, data_, clear, timeout }) {
	let current_search_store
	const search_store$ = setter_computed$(query$, (query, _set)=>{
		// const set = in_set as (value:search_result_T)=>void
		if (!query) {
			run(clear || (()=>{
				set(_set, {
					done: true,
					loading: false,
					query$,
					data: []
				})
			}))
			return
		}
		if ((current_search_store === null || current_search_store === void 0 ? void 0 : current_search_store.query$.$) === query) {
			return
		}
		set(_set, {
			done: false,
			loading: true,
			query$
		})
		if (typeof typeof timeout !== 'number') timeout = 10000
		Promise.race([
			new Promise((_res, rej)=>{
				setTimeout(()=>rej(new Error('Timeout'))
					, timeout)
			}),
			run(async ()=>{
				const data = await data_({
					query
				})
				if (query === query$.$) {
					set(_set, {
						done: true,
						loading: false,
						query$,
						data
					})
				}
			})
		]).then()
	})
	return search_store$
	function set(_set, search_store) {
		current_search_store = search_store
		_set(search_store)
	}
}
export { search_result_store_ as _store__search_result }
