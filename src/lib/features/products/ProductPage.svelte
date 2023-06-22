<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";
	import type {Product} from "./types/Product.js";
	import Markdown from "@magidoc/plugin-svelte-marked";
	import {invalidateAll} from "$app/navigation";

	export let product: DeepReadonly<Product & {isFavorite: boolean | null}>;

	const handleLikeSubmit = async (e: Event) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const url = formElement.action;
		await fetch(url, {
			method: "POST",
			body: formData,
		});
		await invalidateAll();
	};

	const handleUnlikeSubmit = async (e: Event) => {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const url = formElement.action;
		await fetch(url, {
			method: "POST",
			body: formData,
		});
		await invalidateAll();
	};

	$: isFavorite = product.isFavorite;
</script>

<div class="page">
	<a class="back" href="/baza-produktow"><i class="fa-sharp fa-solid fa-backward-step" /></a>
	{#if product.isFavorite !== null}
		<form
			class="heart"
			on:submit={product.isFavorite ? handleUnlikeSubmit : handleLikeSubmit}
			action={isFavorite
				? `/unlike-product?product=${product.id}`
				: `/like-product?product=${product.id}`}
			method="POST"
		>
			<button type="submit">
				<i class="fa-solid fa-heart" class:purple={isFavorite} />
			</button>
		</form>
	{/if}
	<div class="short-text">
		<p>{product.name}</p>
		<p>{product.categories.map((category) => category.name).join(", ")}</p>
		<p>{product.brand.name}</p>
		{#if product.volume}
			<p>{product.volume} l</p>
		{/if}
		{#if product.mass}
			<p>{1000 * product.mass} g</p>
		{/if}
	</div>
	<div class="wide-text">
		{#if product.ingredients}
			<p>{product.ingredients.map((ingredient) => ingredient.name).join(", ")}</p>
		{/if}
	</div>
	{#each product.offers as offer}
		<div class="product">
			<img src={offer.imageUrl} alt="" srcset="" />
			<div class="short-text">
				<p>{offer.price} zł</p>
			</div>
			<div class="wide-text">
				{#if offer.description}
					<Markdown source={offer.description} />
				{/if}
			</div>
		</div>
	{/each}
	{#if !product.offers[0]}
		<p>Brak danych</p>
	{/if}
</div>

<style>
	.page {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 25px;
		margin: 40px;
		background-color: white;
		padding: 25px;
	}
	.product {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-template-rows: auto;
		grid-template-areas:
			"image image - short-text"
			"wide-text wide-text wide-text wide-text";
	}
	img {
		grid-area: image;
		height: 400px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	.short-text {
		grid-area: short-text;
	}
	.wide-text {
		grid-area: wide-text;
		text-align: justify;
	}
	.back {
		color: var(--primary-color-3);
		font-size: 30px;
	}
	.heart {
		display: flex;
		/* justify-content: center; */
		/* margin-bottom: 10px; */
	}
	.heart i {
		font-size: 16px;
		color: lightgray;
	}
	.heart i:hover,
	.heart i.purple {
		color: var(--primary-color-3);
	}
</style>
