<script>
	import { base } from '$app/paths'
	import { fly } from 'svelte/transition'
	import CountryList from '../lib/CountryList.svelte'

	let countryFilter = ''
	let blahajType = 'original'

	function setType(newType) {
		blahajType = newType
	}
</script>

<svelte:head>
	<title>BLÅHAJ Radar</title>
	<meta name="title" content="BLÅHAJ Radar" />
	<meta
		name="description"
		content="Locate IKEA locations that have BLÅHAJ stock"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hazy.gay/blahaj" />
	<meta property="og:title" content="BLÅHAJ Radar" />
	<meta
		property="og:description"
		content="Locate IKEA locations that have BLÅHAJ stock"
	/>
	<meta property="og:image" content="https://hazy.gay/blahaj/blobhaj.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content="https://hazy.gay/blahaj" />
	<meta property="twitter:site" content="@hazycora" />
	<meta property="twitter:creator" content="@hazycora" />
	<meta property="twitter:title" content="BLÅHAJ Radar" />
	<meta
		property="twitter:description"
		content="Locate IKEA locations that have BLÅHAJ stock"
	/>
	<meta
		property="twitter:image"
		content="https://hazy.gay/blahaj/blobhaj.svg"
	/>
</svelte:head>

<div class="layout">
	<div class="hero">
		<div class="hero-message">
			<h1>BLÅHAJ Radar</h1>
			<p>View BLÅHAJ stock in various countries</p>
		</div>
		<img class="hero-cover" src="{base}/hero.jpg" alt="BLÅHAJ" />
	</div>
	<div class="main-content">
		<div class="blahaj-select-buttons">
			<button
				on:click={() => setType('original')}
				selected={blahajType === 'original' || null}>Original BLÅHAJ</button
			>
			<button
				on:click={() => setType('baby')}
				selected={blahajType === 'baby' || null}>Baby BLÅHAJ</button
			>
		</div>
		<div class="display-image-wrapper">
			{#if blahajType === 'original'}
				<div transition:fly={{ x: -800, duration: 400 }} class="display-image">
					<img src="{base}/originalblahaj.webp" alt="" />
				</div>
			{:else if blahajType === 'baby'}
				<div transition:fly={{ x: 800, duration: 400 }} class="display-image">
					<img src="{base}/babyblahaj.webp" alt="" />
					<div class="display-image-badge">NEW!</div>
				</div>
			{/if}
		</div>
		<input
			type="text"
			class="country-filter-search"
			bind:value={countryFilter}
			placeholder="Search"
			autocomplete="off"
		/>
		<div class="listings-wrapper">
			<CountryList {blahajType} {countryFilter} />
		</div>
	</div>
	<div class="links">
		<p>
			<a
				href="https://twitter.com/intent/tweet?text=Locate%20IKEA%20locations%20that%20have%20BL%C3%85HAJ%20in%20stock&url=https%3A%2F%2Fhazy.gay%2Fblahaj&related=hazycora"
				>share with twitter</a
			>
		</p>
		<p><a href="https://github.com/hazycora/blahaj">view source</a></p>
		<p>
			<a href="http://heatherhorns.com/emoji/">blobhaj emoji by heatherhorns</a>
		</p>
		<p>
			<a href="https://hazy.gay/things">hazy.gay</a> - inspired by
			<a href="//git.lavender.software/charlotte/shark-radar">shark-radar</a>
		</p>
	</div>
</div>
