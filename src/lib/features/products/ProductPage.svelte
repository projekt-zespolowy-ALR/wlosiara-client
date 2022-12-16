<script lang="ts">
	import type {Product} from "./interfaces.d.js";

	export let product: Product;
</script>

<div class="page">
	<a class="back" href="/baza-produktow"><i class="fa-sharp fa-solid fa-backward-step" /></a>
	<div class="product">
		<img src={product.imageUrl} alt="" srcset="" />
		<div class="short-text">
			<p>{product.name}</p>
			<p>{product.category}</p>
			<p>{product.subcategory}</p>
			<p>{product.brand}</p>
			<p>{product.price}</p>
			<p>{product.capacity}</p>
		</div>
		<div class="wide-text">
			<p>{product.description}</p>
			<p>{product.ingredients}</p>
		</div>
	</div>
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
</style>
