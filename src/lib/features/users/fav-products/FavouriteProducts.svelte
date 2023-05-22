<script lang="ts">
	import ProductListItem from "$lib/features/products/ProductListItem.svelte";
	export let currentUser: User | null;
	import type PopulatedProduct from "../../products/types/PopulatedProduct.js";
	import type User from "../types/User.js";

	export let allProducts: PopulatedProduct[];
	export let favProductIds: string[];
	const favProducts = allProducts
		? allProducts.filter((product: PopulatedProduct) => product.id in favProductIds)
		: [];
</script>

<div class="fav-products-page">
	{#if currentUser}
		<h3>Ulubione produkty użytkownika {currentUser.username}</h3>
	{/if}
	<ul>
		{#each favProducts as product (product.id)}
			<ProductListItem {product} />
		{/each}
	</ul>
</div>

<style>
	div.fav-products-page {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
