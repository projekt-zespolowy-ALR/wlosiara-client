<script lang="ts">
	import UserProfile from "$lib/features/users/UserProfile.svelte";

	import type {PageServerData} from "./$types.js";
	import type PopulatedProduct from "../../lib/features/products/types/PopulatedProduct.js";
	import currentUserStore from "../../lib/features/auth/currentUserStore.js";

	export let data: PageServerData;
	const allProducts: readonly PopulatedProduct[] = data ? data.products : [];
</script>

{#if $currentUserStore}
	<UserProfile {allProducts} favProductIds={$currentUserStore.fav_products} />
{:else}
	<UserProfile {allProducts} favProductIds={[]} />
{/if}
