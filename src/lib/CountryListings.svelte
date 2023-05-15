<script>
	import { slide } from 'svelte/transition'
	import Listing from '$lib/Listing.svelte'

	export let countryData
	export let itemType
	let listings
	let loaded = false
	let isOpen = false

	let available = typeof countryData.itemUrls?.[itemType] != 'undefined'

	function parseStock(availability) {
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

	async function fetchIkeaApi(path) {
		let req = await fetch(`https://api.ingka.ikea.com/${path}`, {
			headers: {
				Accept: 'application/json;version=2',
				'X-Client-ID': 'b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631'
			}
		})
		return await req.json()
	}

	async function loadContent() {
		if (countryData.cantCheckAutomatically) return
		let listingData = await fetchIkeaApi(
			`cia/availabilities/ru/${countryData.countryCode}?itemNos=${countryData.itemIds[itemType]}&expand=StoresList,Restocks,SalesLocations`
		)
		let stocks = listingData.availabilities.map(e => parseStock(e))
		return stocks
			.sort((a, b) => {
				return b.quantity - a.quantity
			})
			.filter(e => !e.err)
	}

	function onClick() {
		isOpen = !isOpen
		if (isOpen && !loaded) {
			listings = loadContent()
			loaded = true
		}
	}
</script>

<div
	class="country-listings"
	class:unavailable={!available}
	id="country-listing-{btoa(countryData.name)}"
	class:baby-blahaj={itemType === 'baby'}
>
	<button
		aria-expanded={isOpen}
		aria-controls="country-listing-{btoa(countryData.name)}"
		class="country-listings-open-button"
		on:click={onClick}
	>
		<h2 class="country-listings-name-wrapper">
			<span class="country-listings-emoji" aria-hidden="true"
				>{countryData.emoji}</span
			>
			<span>{countryData.name}</span>
			{#if countryData.cantCheckAutomatically}
				<span class="country-listings-name-warning">(broken)</span>
			{/if}
		</h2>
	</button>
	{#if isOpen}
		<div class="country-listings-content" out:slide={{ duration: 100 }}>
			{#if !available}
				<p>
					{itemType} BLÅHAJ seem to not be sold in {countryData.abbrv ??
						countryData.name}
				</p>
			{:else if countryData.cantCheckAutomatically}
				<p>{countryData.cantCheckAutomaticallyMessage}</p>
				{#if countryData.itemUrls?.[itemType]}
					<a href={countryData.itemUrls[itemType]}
						>See the listings for BLÅHAJ in {countryData.abbrv ??
							countryData.name}</a
					>
				{/if}
			{:else}
				<a href={countryData.itemUrls[itemType]}
					>See the listings for BLÅHAJ in {countryData.abbrv ??
						countryData.name}</a
				>
				{#if loaded}
					{#await listings}
						<p>loading...</p>
					{:then listings}
						<ul>
							{#each listings as listing, i}
								<Listing {listing} delay={(400 / listings.length) * i} />
							{/each}
						</ul>
					{/await}
				{/if}
			{/if}
		</div>
	{/if}
</div>
