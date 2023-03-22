<script lang="ts">
	import type {PageServerData} from "./$types.js";
	import FavouriteProducts from "$lib/features/users/fav-products/FavouriteProducts.svelte";
	import type PopulatedProduct from "../../../lib/features/products/types/PopulatedProduct.js";
	import currentUserStore from "$lib/features/auth/currentUserStore.js";

	export let data: PageServerData;
	const allProducts: readonly PopulatedProduct[] = data ? data.products : [];
</script>

{#if $currentUserStore}
	<FavouriteProducts {allProducts} favProductIds={$currentUserStore.fav_products} />
{:else}
	<FavouriteProducts {allProducts} favProductIds={[]} />
{/if}
