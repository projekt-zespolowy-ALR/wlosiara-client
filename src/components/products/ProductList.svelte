<script type="ts">
	import {ProductStore} from "../../stores/productStore";
	import FilterMenu from "./FilterMenu.svelte";
	import ProductListItem from "./ProductListItem.svelte";
</script>

<div class="product-list-page">
	<h3>Baza produktów</h3>
	<FilterMenu />
	<ul>
		{#each $ProductStore as product (product.id)}
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
