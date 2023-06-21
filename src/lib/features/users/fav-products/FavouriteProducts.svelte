<script lang="ts">
	import ProductListItem from "$lib/features/products/ProductListItem.svelte";
	import type {DeepReadonly} from "ts-essentials";
	export let currentUser: DeepReadonly<User> | null;
	import type {Product} from "../../products/types/Product.js";
	import type {User} from "../types/User.js";

	export let allProducts: DeepReadonly<(Product & {isFavorite: boolean | null})[]>;
	export let favProductIds: DeepReadonly<string[]>;
	const favProducts = allProducts
		? allProducts.filter((product: DeepReadonly<Product>) => product.id in favProductIds)
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
