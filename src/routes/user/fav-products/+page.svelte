<script lang="ts">
	import type {PageServerData} from "./$types.js";
	import FavouriteProducts from "$lib/features/users/fav-products/FavouriteProducts.svelte";
	import type {User} from "$lib/features/users/types/User.js";
	export let currentUser: User | null;

	export let data: PageServerData;
	$: productsPage = data.productsPage;
</script>

<svelte:head>
	<title>Ulubione</title>
</svelte:head>
{#if currentUser}
	<FavouriteProducts {productsPage} {currentUser} />
{:else}
	<FavouriteProducts {productsPage} {currentUser} />
{/if}
