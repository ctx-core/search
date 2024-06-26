/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { memo_ } from 'ctx-core/rmemo'
import { run } from 'ctx-core/run'
/** @typedef {ctx_T} */
/**
 * @param {search_result__params_T}params
 * @returns {search_store_T}
 */
export function search_result__new(params) {
	const { query_, data_, clear } = params
	let { timeout } = params
	let current_search_store
	const search_store$ =
		memo_(search_store$=>{
			if (!query_()) {
				run(clear ?? (()=>{
					set({
						done: true,
						loading: false,
						query: query_(),
						data: []
					})
				}))
				return search_store$.val
			}
			if (current_search_store?.query === query_()) {
				return search_store$.val
			}
			set({
				done: false,
				loading: true,
				query: query_()
			})
			if (typeof typeof timeout !== 'number') timeout = 10000
			let timeout_id
			Promise.race([
				new Promise((_res, rej)=>{
					timeout_id = setTimeout(()=>
						rej(new Error('Timeout')), timeout)
				}),
				run(async ()=>{
					const data = await data_({ query: query_() })
					const $query_ = query_()
					if (query_() === $query_) {
						set({
							done: true,
							loading: false,
							query: query_(),
							data
						})
					}
				})
			]).then()
				.finally(()=>clearTimeout(timeout_id))
			return search_store$.val
			function set(search_store) {
				current_search_store = search_store
				search_store$.set(search_store)
			}
		})
	return search_store$
}
