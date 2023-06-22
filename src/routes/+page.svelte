<script lang="ts">
	import LandingPage from "$lib/landing_page/LandingPage.svelte";
	import type {PageData} from "./$types.js";

	export let data: PageData;
</script>

<svelte:head>
	<title>Włosiara.pl</title>
</svelte:head>
<LandingPage blogEntriesPage={data.blogEntriesPage} />
