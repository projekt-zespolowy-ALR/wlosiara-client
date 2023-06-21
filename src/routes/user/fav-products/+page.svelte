<script lang="ts">
	import type {PageServerData} from "./$types.js";
	import FavouriteProducts from "$lib/features/users/fav-products/FavouriteProducts.svelte";
	import type {Product} from "../../../lib/features/products/types/Product.js";
	import type {User} from "$lib/features/users/types/User.js";
	import type {DeepReadonly} from "ts-essentials";
	export let currentUser: User | null;

	export let data: PageServerData;
	const allProducts: DeepReadonly<(Product & {isFavorite: boolean | null})[]> = data
		? data.products
		: [];
</script>

{#if currentUser}
	<FavouriteProducts {allProducts} favProductIds={currentUser.fav_products} {currentUser} />
{:else}
	<FavouriteProducts {allProducts} favProductIds={[]} {currentUser} />
{/if}
