<script lang="ts">
	import ProductList from "$lib/features/products/ProductList.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
</script>

<ProductList productsPage={data.productsPage} />
