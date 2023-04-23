<script lang="ts">
	import ProductList from "$lib/features/products/ProductList.svelte";

	import type {PageServerData} from "./$types.js";
	import currentUserStore from "$lib/features/auth/currentUserStore.js";

	export let data: PageServerData;
</script>

<ProductList products={data.products} user={$currentUserStore} />
