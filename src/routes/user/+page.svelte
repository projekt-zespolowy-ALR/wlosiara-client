<script lang="ts">
	import UserProfile from "$lib/features/users/UserProfile.svelte";

	import type {PageServerData} from "./$types.js";
	import type PopulatedProduct from "../../lib/features/products/types/PopulatedProduct.js";

	export let data: PageServerData;
	const favProducts: PopulatedProduct[] = data ? data.products.slice(0, 3) : [];
</script>

<UserProfile {favProducts} />
