<script lang="ts">
	import ProductListItem from "$lib/features/products/ProductListItem.svelte";
	import currentUserStore from "$lib/features/auth/currentUserStore.js";
	import type PopulatedProduct from "../../products/types/PopulatedProduct.js";

	export let products: PopulatedProduct[];
</script>

<div class="fav-products-page">
	{#if $currentUserStore}
		<h3>Ulubione produkty użytkownika {$currentUserStore.username}</h3>
	{/if}
	<ul>
		{#each products as product (product.id)}
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
