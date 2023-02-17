import { run } from '@ctx-core/function'
import { setter_computed_ } from '@ctx-core/nanostores'
/**
 * @param opts{import('./index.d.ts').search_result__opts_T}
 * @returns {import('./index.d.ts').search_store_T}
 */
export function search_store__(opts) {
	const { query_, data_, clear } = opts
	let { timeout } = opts
	let current_search_store
	const search_store_ = setter_computed_(query_, (query, _set)=>{
		if (!query) {
			run(clear || (()=>{
				set({
					done: true,
					loading: false,
					query: query_.get(),
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
			query: query_.get()
		})
		if (typeof typeof timeout !== 'number') timeout = 10000
		Promise.race([
			new Promise((_res, rej)=>{
				setTimeout(()=>rej(new Error('Timeout'))
					, timeout)
			}),
			run(async ()=>{
				const data = await data_({ query })
				const $query_ = query_.get()
				if (query === $query_) {
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
	return search_store_
}
export {
	search_store__ as search_store$_,
	search_store__ as search_result_store_,
	search_store__ as _store__search_result
}
