<script lang="ts">
	import type {Product} from "./types/Product.js";
	import {addProductToFav, productLiked} from "./product-functions.js";
	import type {DeepReadonly} from "ts-essentials";

	export let product: DeepReadonly<Product>;
</script>

<li>
	<div class="heart">
		<i
			class="fa-solid fa-heart"
			class:purple={productLiked(product.id)}
			on:keypress={() => {}}
			on:click={() => addProductToFav(product.id)}
		/>
	</div>
	<a href="/baza-produktow/{product.id}">
		{#if product.inDataSources[0]}
			<div class="img">
				<img src={product.inDataSources[0].imageUrl} alt={product.name} />
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
