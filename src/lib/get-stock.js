async function fetchIkeaApi(path) {
	let req = await fetch(`https://api.ingka.ikea.com/${path}`, {
		headers: {
			Accept: 'application/json;version=2',
			'X-Client-ID': 'b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631'
		}
	})
	return await req.json()
}

async function fetchCors(url, options) {
	url = `https://cors.besties.house/?url=${encodeURIComponent(url)}`
	return fetch(url, options)
}

function parseStock(availability, countryData) {
	let store = countryData.stores.find(e => {
		return e.value === availability.classUnitKey.classUnitCode
	})
	if (!store) {
		return {
			code: availability.classUnitKey.classUnitCode,
			err: true,
			store: {
				name: 'unknown'
			},
			quantity: 0
		}
	}
	let nextRestock = undefined
	if (availability.buyingOption?.cashCarry?.availability?.restocks) {
		nextRestock = availability.buyingOption.cashCarry.availability.restocks[0]
	}
	let quantity =
		availability.buyingOption?.cashCarry?.availability?.quantity ?? null
	if (quantity === null) {
		return {
			code: availability.classUnitKey.classUnitCode,
			store: store,
			message: 'unavailable',
			quantity: 0,
			nextRestock: nextRestock
		}
	}
	return {
		code: availability.classUnitKey.classUnitCode,
		store: store,
		quantity: quantity,
		nextRestock: nextRestock
	}
}

export default async function getStock(countryData, itemType) {
	if (countryData.cantCheckAutomatically) return
	switch (countryData.apiType ?? 0) {
		case 0: {
			let listingData = await fetchIkeaApi(
				`cia/availabilities/ru/${countryData.countryCode}?itemNos=${countryData.itemIds[itemType]}&expand=StoresList,Restocks,SalesLocations`
			)
			let stocks = listingData.availabilities.map(e => parseStock(e, countryData))
			return stocks
				.sort((a, b) => {
					return b.quantity - a.quantity
				})
				.filter(e => !e.err)
		}
		case 1: {
			const domParser = new DOMParser()
			let listingXml = await (
				await fetchCors(
					`${countryData.ikeaOrigin}/ajax/Atcom.Sites.Ikea.Components.ProductDetail.StoresAvailability/?sku=${countryData.itemIds[itemType]}`
				)
			).text()
			const xmlDoc = domParser.parseFromString(listingXml, 'text/html')
			let storeList = [...xmlDoc.querySelectorAll('ul.available-stores > li')]
			return storeList.map(e => {
				let quantity = e
					.getAttribute('data-message')
					.match(/.*?: <b>(.*?)<\/b>/)[1]
					?.trim()
				if (!quantity ?? quantity == '') {
					quantity = 0
				} else {
					quantity = parseInt(quantity)
				}
				return {
					store: {
						value: e.getAttribute('data-value'),
						name: e.getAttribute('data-text').replace(/^IKEA /, '')
					},
					quantity
				}
			})
		}
		case 2: {
			const domParser = new DOMParser()
			let listingXml = await (
				await fetchCors(`${countryData.ikeaOrigin}/en/products/sidenavPup`, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					body: `id=${countryData.itemIds[itemType]}`,
					method: 'POST'
				})
			).text()
			const xmlDoc = domParser.parseFromString(listingXml, 'text/html')
			let quantityMessage = xmlDoc
				.querySelector('p:not([class])')
				?.textContent.trim()
			const stocks = [
				...xmlDoc.querySelectorAll('.message > .stock-icon + p')
			].map(e => {
				const textContent = e.textContent.trim()
				if (
					textContent.startsWith('Available') ||
					textContent == 'In stock'
				) {
					return -2
				} else if (textContent.startsWith('Not available')) {
					return -1
				} else {
					return parseInt(quantityMessage) || -1
				}
			})
			return [
				...xmlDoc.querySelectorAll(
					'.col-12:first-child .display-7, .display-8'
				)
			].map((e, i) => {
				const city = e.textContent.match(/.*?IKEA (.*?)$/)?.[1]
				return {
					store: {
						name: city
					},
					quantity: stocks[i]
				}
			})
		}
		case 3: {
			const domParser = new DOMParser()
			let listingXml = await (
				await fetchCors(countryData.itemUrls[itemType])
			).text()
			const xmlDoc = domParser.parseFromString(listingXml, 'text/html')

			return [
				{
					store: {
						name: 'Online purchase'
					},
					quantity:
						parseInt(
							xmlDoc.querySelector('input.val')?.getAttribute('max')
						) || 0
				}
			]
		}
	}
}