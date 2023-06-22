<script lang="ts">
	import ProductListItem from "$lib/features/products/ProductListItem.svelte";
	import type {DeepReadonly} from "ts-essentials";
	export let currentUser: DeepReadonly<User> | null;
	import type {Product} from "../../products/types/Product.js";
	import type {User} from "../types/User.js";
	import type {Page} from "$lib/server/utils/Page.js";

	export let productsPage: DeepReadonly<Page<Product & {isFavorite: boolean | null}>>;
</script>

<div class="fav-products-page">
	{#if currentUser}
		<h3>Ulubione produkty użytkownika {currentUser.username}</h3>
	{/if}
	<ul>
		{#each productsPage.items as product (product.id)}
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
