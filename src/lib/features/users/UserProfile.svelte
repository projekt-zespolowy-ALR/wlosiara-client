<script lang="ts">
	import currentUserStore from "$lib/features/auth/currentUserStore.js";
	import ShortFavouriteProducts from "$lib/features/users/fav-products/ShortFavouriteProducts.svelte";
	import type PopulatedProduct from "../products/types/PopulatedProduct.js";
	export let favProducts: PopulatedProduct[];
</script>

<div class="user-profile-page">
	<div class="user-header">
		{#if $currentUserStore}
			<h3>{$currentUserStore.username}</h3>
		{:else}<span>username</span>{/if}
	</div>

	<ShortFavouriteProducts {favProducts} />

	<div class="user-info">
		{#if $currentUserStore}
			<p>{$currentUserStore.id}</p>
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
