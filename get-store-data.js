import fs from 'fs'
import fetch from 'node-fetch'

import { ikeaData } from './basic-store-data.js'

for (let [i, country] of Object.entries(ikeaData)) {
	const percentage = (((parseInt(i) + 1) / ikeaData.length) * 100).toFixed(2)

	if ((country.apiType ?? 0) != 0 || country.cantCheckUrls) {
		console.log(
			`${percentage}% complete  \tskipping all checks for ${
				country.abbrv ?? country.name
			} (can't check urls)`
		)
		continue
	}

	ikeaData[i].itemUrls = {}

	if (country.itemIds.original) {
		const itemPageHtml = await (
			await fetch(
				`https://www.ikea.com/${country.urlCode}/p/blahaj-${country.itemIds.original}/`
			)
		).text()
		ikeaData[i].itemUrls.original = itemPageHtml.match(
			/<meta (?:[^<>]*?)?property="og:url" content="(.*?)"\/?>/
		)[1]
	}
	if (country.itemIds.baby) {
		const itemPageHtml = await (
			await fetch(
				`https://www.ikea.com/${country.urlCode}/p/blahaj-${country.itemIds.baby}/`
			)
		).text()
		ikeaData[i].itemUrls.baby = itemPageHtml.match(
			/<meta (?:[^<>]*?)?property="og:url" content="(.*?)"\/?>/
		)[1]
	}

	if (country.cantCheckAutomatically) {
		console.log(
			`${percentage}% complete  \tskipping stores for ${
				country.abbrv ?? country.name
			} (can't check automatically)`
		)
		continue
	}

	let storesResp = await fetch(
		`https://www.ikea.com/${country.urlCode}/meta-data/navigation/stores-detailed.json`
	)
	let stores = await storesResp.json()

	ikeaData[i].stores = stores.map(e => {
		return {
			value: e.id,
			name: e.displayName,
			address: e.address.street,
			displayAddress: e.address.displayAddress
		}
	})

	console.log(
		`${percentage}% complete  \tfinished retrieving stores for ${
			country.abbrv ?? country.name
		}`
	)
}

console.log(`Sorting entries`)

ikeaData.sort((a, b) => a.name.localeCompare(b.name))

console.log(`Complete, saving to file`)

fs.promises.writeFile(
	'src/lib/store-data.js',
	'export default ' + JSON.stringify(ikeaData)
)

console.log(`Success`)
