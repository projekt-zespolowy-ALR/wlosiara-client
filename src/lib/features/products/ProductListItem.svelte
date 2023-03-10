<script lang="ts">
	import type PopulatedProduct from "./types/PopulatedProduct.js";

	export let product: PopulatedProduct;
</script>

<li>
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
</style>
