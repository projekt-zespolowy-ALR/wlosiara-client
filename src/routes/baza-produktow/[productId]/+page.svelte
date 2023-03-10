<script lang="ts">
	import ProductPage from "$lib/features/products/ProductPage.svelte";
	import type PopulatedProduct from "$lib/features/products/types/PopulatedProduct.js";

	export let product: PopulatedProduct;
</script>

<ProductPage {product} />
