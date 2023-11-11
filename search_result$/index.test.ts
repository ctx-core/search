import { sleep } from '@ctx-core/function'
import { atom } from '@ctx-core/nanostores'
// @ts-ignore
import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { search_result$__new } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('search_result$__new|query_: blank -> present|single run', async ()=>{
	const query_ = atom('')
	const data_ = async ()=>{
		await sleep(10)
		return [0, 1, 2]
	}
	const search_store$ = search_result$__new({
		query_,
		data_
	})
	equal(search_store$.$, {
		done: true,
		loading: false,
		query: '',
		data: []
	})
	query_.set('query-value')
	await clock.tickAsync(11)
	await clock.runAllAsync()
	equal(search_store$.$, {
		done: false,
		loading: true,
		query: 'query-value',
	})
	await clock.tickAsync(11)
	await clock.runAllAsync()
	equal(search_store$.$, {
		done: true,
		loading: false,
		query: 'query-value',
		data: [0, 1, 2]
	})
})
test.run()
