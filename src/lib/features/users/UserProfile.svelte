<script lang="ts">
	export let currentUser: DeepReadonly<User> | null;
	import ShortFavouriteProducts from "$lib/features/users/fav-products/ShortFavouriteProducts.svelte";
	import type {DeepReadonly} from "ts-essentials";
	import type {Product} from "../products/types/Product.js";
	import type {User} from "./types/User.js";
	import {invalidateAll} from "$app/navigation";
	import type {Page} from "$lib/server/utils/Page.js";

	export let productsPage: DeepReadonly<Page<Product>>;

	const handleAvatarChange = async () => {
		const newUrl = prompt("Podaj nowy url avatara");
		if (newUrl) {
			await fetch("/change-avatar", {
				method: "POST",
				body: JSON.stringify({avatarUrl: newUrl}),
			});
			await invalidateAll();
		}
	};
</script>

<div class="user-profile-page">
	<div class="user-header">
		{#if currentUser}
			<h3>{currentUser.username}</h3>
		{:else}<span>username</span>{/if}
	</div>

	<div>
		<button on:click={handleAvatarChange}>Zmień avatar</button>
	</div>

	<ShortFavouriteProducts favProducts={productsPage.items} />

	<div class="user-info">
		{#if currentUser}
			<p>{currentUser.id}</p>
		{:else}<span>id</span>{/if}
	</div>
</div>

<style>
	div.user-profile-page {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
