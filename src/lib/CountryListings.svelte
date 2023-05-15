<script>
	import { slide } from 'svelte/transition'
	import Listing from '$lib/Listing.svelte'
	import getStock from './get-stock.js'

	export let countryData
	export let itemType
	let listings
	let loaded = false
	let isOpen = false

	let available = typeof countryData.itemUrls?.[itemType] != 'undefined'

	function onClick() {
		isOpen = !isOpen
		if (isOpen && !loaded) {
			listings = getStock(countryData, itemType)
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
						{#if listings.length > 0}
							<ul>
								{#each listings as listing, i}
									<Listing {listing} delay={(400 / listings.length) * i} />
								{/each}
							</ul>
						{:else}
							<p>No stores with {itemType} BLÅHAJ in stock 💔</p>
						{/if}
					{/await}
				{/if}
			{/if}
		</div>
	{/if}
</div>
