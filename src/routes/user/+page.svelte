<script lang="ts">
	import UserProfile from "$lib/features/users/UserProfile.svelte";

	import type {PageData} from "./$types.js";

	export let data: PageData;
	$: productsPage = data.productsPage;
</script>

<svelte:head>
	<title>Profil</title>
</svelte:head>
{#if data.currentUser}
	<UserProfile {productsPage} currentUser={data.currentUser} />
{:else}
	<UserProfile {productsPage} currentUser={data.currentUser} />
{/if}
