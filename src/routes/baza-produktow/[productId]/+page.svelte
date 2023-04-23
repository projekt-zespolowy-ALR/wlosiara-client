<script lang="ts">
	import ProductPage from "$lib/features/products/ProductPage.svelte";

	import type {PageServerData} from "./$types.js";

	export let data: PageServerData;
</script>

<ProductPage product={data.product} />
