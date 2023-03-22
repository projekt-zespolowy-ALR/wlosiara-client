<script lang="ts">
	import type {PageServerData} from "./$types.js";
	import FavouriteProducts from "$lib/features/users/fav-products/FavouriteProducts.svelte";
	import type PopulatedProduct from "../../../lib/features/products/types/PopulatedProduct.js";

	export let data: PageServerData;
	const products: PopulatedProduct[] = data ? data.products.slice(0, 4) : [];
</script>

<FavouriteProducts {products} />
