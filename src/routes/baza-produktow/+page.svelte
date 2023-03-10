<script lang="ts">
	import ProductList from "$lib/features/products/ProductList.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;

	const {products} = data;
</script>

<ProductList {products} />
