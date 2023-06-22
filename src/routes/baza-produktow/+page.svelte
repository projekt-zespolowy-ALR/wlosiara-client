<script lang="ts">
	import ProductList from "$lib/features/products/ProductList.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Baza produktów</title>
</svelte:head>
<ProductList productsPage={data.productsPage} pagingOptions={data.pagingOptions} />
