/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { run } from 'ctx-core/function'
import { memo_ } from 'ctx-core/rmemo'
/** @typedef {Ctx} */
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
			Promise.race([
				new Promise((_res, rej)=>{
					setTimeout(()=>
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
			return search_store$.val
			function set(search_store) {
				current_search_store = search_store
				search_store$._ = search_store
			}
		})
	return search_store$
}
