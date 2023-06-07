<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";
	import {addProductToFav, productLiked} from "./product-functions.js";
	import type Product from "./types/Product.js";
	import Markdown from "@magidoc/plugin-svelte-marked";

	export let product: DeepReadonly<Product>;
</script>

<div class="page">
	<a class="back" href="/baza-produktow"><i class="fa-sharp fa-solid fa-backward-step" /></a>
	{#if product.inDataSources[0]}
		<div class="product">
			<img src={product.inDataSources[0].imageUrl} alt="" srcset="" />
			<div class="short-text">
				<div class="heart">
					<i
						class="fa-solid fa-heart"
						class:purple={productLiked(product.id)}
						on:keypress={() => {}}
						on:click={() => addProductToFav(product.id)}
					/>
				</div>
				<p>{product.name}</p>
				<p>{product.categories.map((category) => category.name).join(", ")}</p>
				<p>{product.brand.name}</p>
				<p>{product.inDataSources[0].price} zł</p>
				{#if product.volume}
					<p>{product.volume} l</p>
				{/if}
				{#if product.mass}
					<p>{1000 * product.mass} g</p>
				{/if}
			</div>
			<div class="wide-text">
				{#if product.inDataSources[0].description}
					<Markdown source={product.inDataSources[0].description} />
				{/if}
				{#if product.ingredients}
					<p>{product.ingredients.map((ingredient) => ingredient.name).join(", ")}</p>
				{/if}
			</div>
		</div>
	{:else}
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
