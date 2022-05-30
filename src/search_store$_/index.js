import { run } from '@ctx-core/function'
import { setter_computed_ } from '@ctx-core/nanostores'
export function search_store$_({ query$, data_, clear, timeout }) {
	let current_search_store
	const search_store$ = setter_computed_(query$, (query, _set)=>{
		if (!query) {
			run(clear || (()=>{
				set({
					done: true,
					loading: false,
					query: query$.get(),
					data: []
				})
			}))
			return
		}
		if (current_search_store?.query === query) {
			return
		}
		set({
			done: false,
			loading: true,
			query: query$.get()
		})
		if (typeof typeof timeout !== 'number') timeout = 10000
		Promise.race([
			new Promise((_res, rej)=>{
				setTimeout(()=>rej(new Error('Timeout'))
					, timeout)
			}),
			run(async ()=>{
				const data = await data_({ query })
				const $query$ = query$.get()
				if (query === $query$) {
					set({
						done: true,
						loading: false,
						query,
						data
					})
				}
			})
		]).then()
		function set(search_store) {
			current_search_store = search_store
			_set(search_store)
		}
	})
	return search_store$
}
export {
	search_store$_ as search_result_store_,
	search_store$_ as _store__search_result
}
