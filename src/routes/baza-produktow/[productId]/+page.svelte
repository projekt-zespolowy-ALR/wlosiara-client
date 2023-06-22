<script lang="ts">
	import ProductPage from "$lib/features/products/ProductPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
	$: productName = data.product.name;
</script>

<svelte:head>
	<title>{productName ?? "Baza produktów"}</title>
</svelte:head>
<ProductPage product={data.product} />
