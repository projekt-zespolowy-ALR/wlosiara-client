<script lang="ts">
	export let currentUser: User | null;
	import ShortFavouriteProducts from "$lib/features/users/fav-products/ShortFavouriteProducts.svelte";
	import type PopulatedProduct from "../products/types/PopulatedProduct.js";
	import type User from "./types/User.js";

	export let allProducts: readonly PopulatedProduct[];
	export let favProductIds: string[];
	const favProducts = allProducts
		? allProducts.filter((product: PopulatedProduct) => product.id in favProductIds).slice(0, 2)
		: [];
</script>

<div class="user-profile-page">
	<div class="user-header">
		{#if currentUser}
			<h3>{currentUser.username}</h3>
		{:else}<span>username</span>{/if}
	</div>

	<ShortFavouriteProducts {favProducts} />

	<div class="user-info">
		{#if currentUser}
			<p>{currentUser.id}</p>
		{:else}<span>id</span>{/if}
	</div>
</div>

<style>
	div.user-profile-page {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
