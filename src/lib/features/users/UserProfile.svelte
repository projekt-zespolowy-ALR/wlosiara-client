<script lang="ts">
	export let currentUser: DeepReadonly<
		User & {
			hairType: string;
		}
	> | null;
	import ShortFavouriteProducts from "$lib/features/users/fav-products/ShortFavouriteProducts.svelte";
	import type {DeepReadonly} from "ts-essentials";
	import type {Product} from "../products/types/Product.js";
	import type {User} from "./types/User.js";
	import {invalidateAll} from "$app/navigation";
	import type {Page} from "$lib/server/utils/Page.js";
	import type {SubmitFunction} from "@sveltejs/kit";
	import {enhance} from "$app/forms";

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

	// const handleSubmit = async (e: Event) => {
	// 	const maxType = prompt("Podaj typ włosów");
	// 	e.preventDefault();
	// 	const response = await fetch("/send-result", {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			hairType: maxType,
	// 			isPublic: false,
	// 		}),
	// 	});
	// 	const responseJson = await response.json();
	// 	console.log(responseJson);
	// 	await invalidateAll();
	// };

	// handleSubmit using enhanced fetch
	const handleSubmit: SubmitFunction = () => {
		return async ({result}) => {
			console.log(result);
			await invalidateAll();
		};
	};
</script>

<div class="user-profile-page">
	<div class="user-header">
		{#if currentUser}
			<h3>{currentUser.username}</h3>
			{#if currentUser.hairType === null}
				<p>Twój typ włosów to: <span>{currentUser.hairType}</span></p>
			{:else}
				<p>Nie masz jeszcze przypisanego typu włosów</p>
			{/if}

			<form action="/send-result" method="POST" use:enhance={handleSubmit}>
				<!-- <input type="text" name="hairType" placeholder="Podaj typ włosów" /> -->
				<select name="hairType">
					<option value="" disabled selected>Wybierz nowy typ włosów</option>
					<option value="wysokoporowate">wysokoporowate</option>
					<option value="srednioporowate">srednioporowate</option>
					<option value="niskoporowate">niskoporowate</option>
				</select>

				<button type="submit">Zapisz</button>
			</form>
		{/if}
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
	button {
		background-color: var(--primary-color-3);
		border: none;
		border-radius: 5px;
		color: var(--gray-8);
		padding: 5px 10px;
		margin: 10px 0;
		cursor: pointer;
	}
</style>
