<script>
	import { fly } from 'svelte/transition'
	export let listing
	export let delay = 0
	let positive =
		listing.quantity && (listing.quantity > 0 || listing.quantity == -2)
	let restockRange
	let message = listing.message
	if (!message) {
		if (listing.quantity === 1) {
			message = `${listing.quantity} blåhaj`
		} else if (listing.quantity === -2) {
			message = `BLÅHAJ available (quantity uncertain)`
		} else if (listing.quantity === -1) {
			message = `BLÅHAJ unavailable`
		} else {
			message = `${listing.quantity} blåhajar`
		}
	}

	if (listing.nextRestock) {
		let dateEarliest = formatDate(listing.nextRestock.earliestDate)
		let dateLatest = formatDate(listing.nextRestock.latestDate)
		restockRange =
			dateEarliest === dateLatest
				? dateEarliest
				: `${dateEarliest}-${dateLatest}`
	}

	function formatDate(str) {
		let date = new Date(str)
		return new Intl.DateTimeFormat('en-US').format(date)
	}
</script>

<div
	in:fly={{ delay, x: -100, duration: 300 }}
	out:fly={{ delay, 0: -100, duration: 300 }}
	class="listing"
	class:positive
	class:negative={!positive}
>
	<h3>{listing.store.name}</h3>
	{#if listing.store.address}
		<p class="address">{listing.store.address}</p>
	{/if}
	<p class="quantity">{message}</p>
	{#if listing.nextRestock}
		<p class="restock-date">
			Restocking {listing.nextRestock.quantity} blåhajar on {restockRange}
		</p>
	{/if}
</div>
