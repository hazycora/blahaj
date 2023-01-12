import fs from 'fs'
import JSON6 from 'json-6'

let ikeaData = [
    {
        name: "United Kingdom",
		abbrv: "the UK",
		emoji: '🇬🇧',
		countryCode: 'gb',
		urlCode: "gb/en",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
    },
    {
        name: "United States",
		abbrv: "the US",
		emoji: '🇺🇸',
		countryCode: 'us',
		urlCode: "us/en",
		itemIds: {
			original: "90373590",
			baby: "70540665"
		}
    },
    {
        name: "Canada",
		emoji: '🇨🇦',
		countryCode: 'ca',
		urlCode: "ca/en",
		itemIds: {
			original: "90373590",
			baby: "70540665"
		}
	},
	{
		name: "France",
		emoji: '🇫🇷',
		countryCode: 'fr',
		urlCode: "fr/fr",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Sweden",
		emoji: '🇸🇪',
		countryCode: 'se',
		urlCode: "se/sv",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
    },
    {
		name: "Germany",
		emoji: '🇩🇪',
		countryCode: 'de',
		urlCode: "de/de",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Switzerland",
		emoji: '🇨🇭',
		countryCode: 'ch',
		urlCode: "ch/en",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Austria",
		emoji: '🇦🇹',
		countryCode: 'at',
		urlCode: "at/de",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Belgium",
		emoji: '🇧🇪',
		countryCode: 'be',
		urlCode: "be/en",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
        name: "Norway",
		emoji: '🇳🇴',
		countryCode: 'no',
		urlCode: "no/no",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Italy",
		emoji: '🇮🇹',
		countryCode: 'it',
		urlCode: "it/it",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Netherlands",
		emoji: '🇳🇱',
		countryCode: 'nl',
		urlCode: "nl/en",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
	{
		name: "Poland",
		emoji: '🇵🇱',
		countryCode: 'pl',
		urlCode: "pl/pl",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
    {
		name: "Spain",
		emoji: '🇪🇸',
		countryCode: 'es',
		urlCode: "es/es",
		itemIds: {
			baby: "20540663"
		}
	},
    {
		name: "Israel",
		emoji: '🇮🇱',
		countryCode: 'il',
		urlCode: "il/he",
		itemIds: {
			original: "30373588",
			baby: "20540663"
		}
	},
	{
		name: "India",
		emoji: '🇮🇳',
		countryCode: 'in',
		urlCode: "in/en",
		itemIds: {
			original: "10373589"
		}
	},
    {
		name: "Japan",
		emoji: '🇯🇵',
		countryCode: 'jp',
		urlCode: "jp/ja",
		itemIds: {
			original: "10373589",
			baby: '00540664'
		}
	},
    {
		name: "South Korea",
		emoji: '🇰🇷',
		countryCode: 'kr',
		urlCode: "kr/en",
		itemIds: {
			original: "10373589",
			baby: '00540664'
		}
	},
    {
		name: "Australia",
		emoji: '🇦🇺',
		countryCode: 'au',
		urlCode: "au/en",
		itemIds: {
			original: "10373589",
			baby: '00540664'
		}
	},
	{
		name: "Denmark",
		emoji: '🇩🇰',
		countryCode: 'dk',
		urlCode: "dk/da",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Finland",
		emoji: '🇫🇮',
		countryCode: 'fi',
		urlCode: "fi/fi",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Portugal",
		emoji: '🇵🇹',
		countryCode: 'pt',
		urlCode: "pt/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Saudi Arabia",
		emoji: '🇸🇦',
		countryCode: 'sa',
		urlCode: "sa/en",
		itemIds: {
			original: '80556378',
			baby: '30540667'
		}
	},
	{
		name: "Czech Republic",
		emoji: '🇨🇿',
		countryCode: 'cz',
		urlCode: "cz/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "United Arab Emirates",
		emoji: '🇦🇪',
		countryCode: 'ae',
		urlCode: "ae/en",
		itemIds: {
			original: '30373588',
			baby: '30540667'
		}
	},
	{
		name: "Malaysia",
		emoji: '🇲🇾',
		countryCode: 'my',
		urlCode: "my/en",
		itemIds: {
			original: "10373589",
			baby: "00540664"
		}
	},
	{
		name: "Thailand",
		emoji: '🇹🇭',
		countryCode: 'th',
		urlCode: "th/en",
		itemIds: {
			original: "10373589",
			baby: "00540664"
		}
	},
	{
		name: "Macau",
		emoji: '🇲🇴',
		countryCode: 'ma',
		urlCode: "ma/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Egypt",
		emoji: '🇪🇬',
		countryCode: 'eg',
		urlCode: "eg/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Qatar",
		emoji: '🇶🇦',
		countryCode: 'qa',
		urlCode: "qa/en",
		itemIds: {
			baby: '30540667'
		}
	},
	{
		name: "Jordan",
		emoji: '🇯🇴',
		countryCode: 'jo',
		urlCode: "jo/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Croatia",
		emoji: '🇭🇷',
		countryCode: 'hr',
		urlCode: "hr/hr",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Singapore",
		emoji: '🇸🇬',
		countryCode: 'sg',
		urlCode: "sg/en",
		itemIds: {
			original: '10373589',
			baby: '00540664'
		}
	},
	{
		name: "Kuwait",
		emoji: '🇰🇼',
		countryCode: 'kw',
		urlCode: "kw/en",
		itemIds: {
			original: '80556378',
			baby: '30540667'
		}
	},
	{
		name: "Hungary",
		emoji: '🇭🇺',
		countryCode: 'hu',
		urlCode: "hu/hu",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Romania",
		emoji: '🇷🇴',
		countryCode: 'ro',
		urlCode: "ro/ro",
		itemIds: {
			baby: '20540663'
		}
	},
	{
		name: "Ireland",
		emoji: '🇮🇪',
		countryCode: 'ie',
		urlCode: "ie/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Morocco",
		emoji: '🇲🇦',
		countryCode: 'ma',
		urlCode: "ma/en",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Mexico",
		emoji: '🇲🇽',
		countryCode: 'mx',
		urlCode: "mx/en",
		itemIds: {
			original: '90373590',
			baby: '70540665'
		}
	},
	{
		name: "Serbia",
		emoji: '🇷🇸',
		countryCode: 'rs',
		urlCode: "rs/sr",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Slovakia",
		emoji: '🇸🇰',
		countryCode: 'sk',
		urlCode: "sk/sk",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Bahrain",
		emoji: '🇧🇭',
		countryCode: 'bh',
		urlCode: "bh/en",
		itemIds: {
			baby: '30540667'
		}
	},
	{
		name: "Slovenia",
		emoji: '🇸🇮',
		countryCode: 'si',
		urlCode: "si/sl",
		itemIds: {
			original: '30373588',
			baby: '20540663'
		}
	},
	{
		name: "Philippines",
		emoji: '🇵🇭',
		countryCode: 'ph',
		urlCode: "ph/en",
		itemIds: {
			original: '10373589',
			baby: '00540664'
		}
	},
	{
		name: "Oman",
		emoji: '🇴🇲',
		countryCode: 'om',
		urlCode: "om/en",
		itemIds: {
			original: '80556378',
			baby: '30540667'
		}
	},
	{
		name: "Chile",
		emoji: '🇨🇱',
		countryCode: 'cl',
		urlCode: "cl/es",
		unavailable: true,
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Chile seems to not sell BLÅHAJ."
	},
	{
		name: "Ukraine",
		emoji: '🇺🇦',
		countryCode: 'ua',
		urlCode: "ua/uk",
		unavailable: true,
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Ukraine seems to not sell BLÅHAJ."
	},
    {
		name: "Lithuania",
		emoji: '🇱🇹',
		itemUrls: {
			original: 'https://www.ikea.lt/en/products/children-s-room/for-babies/comfort-toys/blahaj-soft-toy-art-30373588',
			baby: 'https://www.ikea.lt/en/products/children-s-room/for-babies/comfort-toys/blahaj-soft-toy-art-20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Lithuania's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Puerto Rico",
		emoji: '🇵🇷',
		itemUrls: {
			original: 'https://www.ikea.pr/puertorico/en/pd/blahaj-soft-toy-art-90373590',
			baby: 'https://www.ikea.pr/puertorico/en/pd/blahaj-soft-toy-art-70540665'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Puerto Rico's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Iceland",
		emoji: '🇮🇸',
		itemUrls: {
			original: 'https://www.ikea.is/en/products/baby-children/play/soft-toys/blahaj-soft-toy-art-30373588',
			baby: 'https://www.ikea.is/en/products/christmas/gift-ideas/gift-ideas/blahaj-soft-toy-art-20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Iceland's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Cyprus",
		emoji: '🇨🇾',
		itemUrls: {
			baby: 'https://www.ikea.com.cy/en/products/baby-children/baby/baby-toys/12-months/blahaj-soft-toy-baby-shark-55-cm/20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Cyprus's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Latvia",
		emoji: '🇱🇻',
		itemUrls: {
			original: 'https://www.ikea.lv/en/products/children-s-room/children-3-7/comfort-toys/blahaj-soft-toy-art-30373588',
			baby: 'https://www.ikea.lv/en/products/children-s-room/children-3-7/comfort-toys/blahaj-soft-toy-art-20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Latvia's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Estonia",
		emoji: '🇪🇪',
		itemUrls: {
			original: 'https://www.ikea.ee/en/products/children-s-room/baby/comfort-toys/blahaj-soft-toy-art-30373588',
			baby: 'https://www.ikea.ee/en/products/children-s-room/baby/comfort-toys/blahaj-soft-toy-art-20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "PLACEHOLDER's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Turkey",
		emoji: '🇹🇷',
		itemUrls: {
			original: 'https://www.ikea.com.tr/en/p30373588',
			baby: 'https://www.ikea.com.tr/en/p20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Turkey's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Dominican Republic",
		emoji: '🇩🇴',
		itemUrls: {
			original: 'https://www.ikea.com.do/en/pd/blahaj-soft-toy-art-90373590',
			baby: 'https://www.ikea.com.do/en/pd/blahaj-soft-toy-art-70540665'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "The Dominican Republic's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Bulgaria",
		emoji: '🇧🇬',
		itemUrls: {
			baby: 'https://www.ikea.bg/products/baby-children/children-3-7/toys-play/soft-toys/blahaj-plyushena-igrachka-malka-akula-55-sm/20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Bulgaria's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Taiwan",
		emoji: '🇹🇼',
		itemUrls: {
			original: 'https://www.ikea.com.tw/en/products/childrens-play/comfort-toys/blahaj-art-10373589',
			baby: 'https://www.ikea.com.tw/en/products/childrens-play/comfort-toys/blahaj-art-00540664'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Taiwan's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    },
    {
		name: "Indonesia",
		emoji: '🇮🇩',
		itemUrls: {
			original: 'https://www.ikea.co.id/en/products/children-play/comfort-toys/blahaj-art-10373589',
			baby: 'https://www.ikea.co.id/en/products/children-play/comfort-toys/blahaj-art-00540664'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Indonesia's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
	},
	{
		name: "Greece",
		emoji: '🇬🇷',
		itemUrls: {
			baby: 'https://www.ikea.gr/en/products/baby-children/baby/baby-toys/12-months/blahaj-soft-toy-baby-shark-55-cm/20540663'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Greece's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
	},
	{
		name: "Hong Kong",
		emoji: '🇭🇰',
		itemUrls: {
			original: 'https://www.ikea.com.hk/en/products/childrens-toys-play-and-learn/soft-toys/blahaj-art-10373589',
			baby: 'https://www.ikea.com.hk/en/products/childrens-toys-play-and-learn/soft-toys/blahaj-art-00540664'
		},
		cantCheckUrls: true,
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "Hong Kong's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
	},
    {
		name: "China",
		emoji: '🇨🇳',
		countryCode: 'cn',
		urlCode: "cn/zh",
		itemIds: {
			original: "10373589",
			baby: "00540664"
		},
		cantCheckAutomatically: true,
		cantCheckAutomaticallyMessage: "China's IKEA website uses a different codebase, so this site cannot check the BLÅHAJ stock automatically at the moment. Check on their site at the link below!"
    }
]

async function getProperUrl(url) {
	let html = await(await fetch(url)).text()
	return html.match(/<meta (?:[^<>]*?)?property="og:url" content="(.*?)"\/?>/)[1]
}

async function getStoresByCountry(countryData) {
	if (countryData.cantCheckUrls) return countryData

	const itemPageHtml = await (await fetch(`https://www.ikea.com/${countryData.urlCode}/p/blahaj-${countryData.itemIds.original??countryData.itemIds.baby}/`)).text()

	let firstItemUrl = itemPageHtml.match(/<meta (?:[^<>]*?)?property="og:url" content="(.*?)"\/?>/)[1]
	
	let itemUrls = {}
	if (countryData.itemIds.original) {
		itemUrls.original = firstItemUrl
		if (countryData.itemIds.baby) itemUrls.baby = await getProperUrl(`https://www.ikea.com/${countryData.urlCode}/p/blahaj-${countryData.itemIds.baby}/`)
	} else {
		itemUrls.baby = firstItemUrl
	}

	if (countryData.cantCheckAutomatically) {
		return {
			...countryData,
			itemUrls
		}
	}

	let mainJsUrl = `https://www.ikea.com/${countryData.urlCode}/products/javascripts/${itemPageHtml.match(/\/products\/javascripts\/(range-pip-main\..*?)">/)[1]}`
	let pipMainJs = await (await fetch(mainJsUrl)).text()
	let matches = pipMainJs.match(/javascripts\/"\+\(({.*?})\[e\][^{]*?({.*?})/m)
	let jsFileNames = JSON6.parse(matches[1])
	let jsFileHashes = JSON6.parse(matches[2])
	let jsFiles = []
	for (let i of Object.keys(jsFileNames)) {
		jsFiles.push(`${jsFileNames[i]}.${jsFileHashes[i]}.js`)
	}
	let stockcheckFilename = jsFiles.find(e => e.startsWith('range-stockcheck.'))
	if (!stockcheckFilename) throw new Error('Found no stockcheck JS file.')
	
	let stockcheckJs = await (await fetch(`https://www.ikea.com/${countryData.urlCode}/products/javascripts/${stockcheckFilename}`)).text()
	let allStoresJson = stockcheckJs.match(/allStores=(\[.*?\])/)[1]
	let stores = JSON6.parse(allStoresJson).map(e => {
		return {
			value: e.value,
			name: e.name,
			address: e.storeAddress.address,
			displayAddress: e.storeAddress.displayAddress
		}
	})

	return {
		...countryData,
		itemUrls,
		stores
	}
}

async function start() {
	await Promise.all(ikeaData.map((e, i) => {
		return (async () => {
			ikeaData[i] = await getStoresByCountry(ikeaData[i])
		})()
	}))
	ikeaData.sort((a, b) => a.name.localeCompare(b.name))
	let storeDataJs = `export default ${JSON.stringify(ikeaData)}`
	await fs.promises.writeFile('src/lib/store-data.js', storeDataJs)
}

start()