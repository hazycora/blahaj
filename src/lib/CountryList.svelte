<script>
	import ikeaData from '$lib/store-data.js'
	import CountryListings from '$lib/CountryListings.svelte'
	import { fly } from 'svelte/transition'
	export let blahajType = 'original'

	let filteredCountries
	export let countryFilter = ''
	$: {
		countryFilter = countryFilter
		blahajType = blahajType
		filteredCountries = ikeaData
			.map(filterCountry)
			.sort((a, b) => b.points - a.points)
			.filter(e => e.points >= 10)
	}
	function filterCountry(countryData) {
		let available = typeof countryData.itemUrls?.[blahajType] != 'undefined'
		if (countryFilter == '')
			return {
				...countryData,
				points: available ? (!countryData.cantCheckAutomatically ? 15 : 12) : 10
			}
		let countryFilterKeywords = countryFilter.toLowerCase().split(/\s/gm)
		let points = 0
		for (let keyword of countryFilterKeywords) {
			let foundKeyword = false
			if (countryData.name.toLowerCase().includes(keyword)) {
				points += 20
				foundKeyword = true
			}
			if (
				countryData.stores?.find(e => e.name.toLowerCase().includes(keyword))
			) {
				points += 10
				foundKeyword = true
			}
			if (
				countryData.stores?.find(e => e.address.toLowerCase().includes(keyword))
			) {
				points += 5
				foundKeyword = true
			}
			if (!foundKeyword) points = -99999
		}
		return {
			...countryData,
			points
		}
	}
</script>

{#if blahajType === 'original'}
	<div class="listings" transition:fly={{ x: -800, duration: 400 }}>
		{#each filteredCountries as countryData}
			<CountryListings {countryData} itemType="original" />
		{/each}
	</div>
{:else if blahajType === 'baby'}
	<div class="listings" transition:fly={{ x: 800, duration: 400 }}>
		{#each filteredCountries as countryData}
			<CountryListings {countryData} itemType="baby" />
		{/each}
	</div>
{/if}
