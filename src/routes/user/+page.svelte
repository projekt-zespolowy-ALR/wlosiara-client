<script lang="ts">
	import UserProfile from "$lib/features/users/UserProfile.svelte";
	import type {DeepReadonly} from "ts-essentials";

	import type {Product} from "../../lib/features/products/types/Product.js";
	import type {PageData} from "./$types.js";

	export let data: PageData;
	const allProducts: DeepReadonly<Product[]> = data ? data.products : [];
</script>

{#if data.currentUser}
	<UserProfile
		{allProducts}
		favProductIds={data.currentUser.fav_products}
		currentUser={data.currentUser}
	/>
{:else}
	<UserProfile {allProducts} favProductIds={[]} currentUser={data.currentUser} />
{/if}
