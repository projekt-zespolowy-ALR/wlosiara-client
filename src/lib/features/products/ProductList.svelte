<script lang="ts">
	import { onMount } from "svelte";
	import {productStore} from "./productStore.js";
	import FilterMenu from "./FilterMenu.svelte";
	import ProductListItem from "./ProductListItem.svelte";

	onMount(async () => {
		fetch("https://api.wlosiara.pl/v1/products")
		.then(response => response.json())
		.then(data => {
				console.log(data);
			// apiData.set(data);
		}).catch(error => {
			console.log(error);
			return [];
		});
		});
</script>

<div class="product-list-page">
	<h3>Baza produktów</h3>
	<FilterMenu />
	<ul>
		{#each $productStore as product (product.id)}
			<ProductListItem {product} />
		{/each}
	</ul>
</div>

<style>
	.product-list-page {
		background-color: #f9f9f9;
		min-height: 80vh;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	h3 {
		margin-left: 50px;
	}
</style>
