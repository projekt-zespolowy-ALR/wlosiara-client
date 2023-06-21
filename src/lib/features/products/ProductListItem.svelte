<script lang="ts">
	import {invalidateAll} from "$app/navigation";
	import type {Product} from "./types/Product.js";
	import type {DeepReadonly} from "ts-essentials";

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

<li>
	<form
		class="heart"
		on:submit={isFavorite ? handleUnlikeSubmit : handleLikeSubmit}
		action={isFavorite
			? `/unlike-product?product=${product.id}`
			: `/like-product?product=${product.id}`}
		method="POST"
	>
		<button type="submit">
			<i class="fa-solid fa-heart" class:purple={isFavorite} />
		</button>
	</form>
	<a href="/baza-produktow/{product.id}">
		{#if product.offers[0]}
			<div class="img">
				<img src={product.offers[0].imageUrl} alt={product.name} />
			</div>
			<div class="item-info">
				<p>{product.name}</p>
			</div>
		{:else}
			<p>Brak danych</p>
		{/if}
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: column;
	}
	li {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		margin: 20px;
		background-color: white;
		padding: 10px 20px;
	}
	.img {
		height: 200px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	li .item-info {
		padding: 0 10px;
		text-align: center;
	}
	.heart {
		display: flex;
		justify-content: end;
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
