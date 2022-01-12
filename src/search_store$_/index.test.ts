import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '@ctx-core/function'
import { atom } from '@ctx-core/nanostores'
import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { search_store$_ } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('search_store$_|query$: blank -> present|single run', async ()=>{
	const query$ = atom('')
	const data_ = async ()=>{
		await sleep(10)
		return [0, 1, 2]
	}
	const search_store$ = search_store$_({ query$, data_ })
	equal(search_store$.$, {
		done: true,
		loading: false,
		query: '',
		data: []
	})
	query$.set('query-value')
	await clock.tickAsync(0)
	equal(search_store$.$, {
		done: false,
		loading: true,
		query: 'query-value',
	})
	await clock.runAllAsync()
	equal(search_store$.$, {
		done: true,
		loading: false,
		query: 'query-value',
		data: [0, 1, 2]
	})
})
test.run()
