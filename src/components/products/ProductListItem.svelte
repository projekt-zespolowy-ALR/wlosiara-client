<script type="ts">
	import type {Product} from "./interfaces";

	export let product: Product;
</script>

<li>
	<img src={product.image_url} alt={product.name} />
	<div class="item-info">
		<p>{product.name}</p>
	</div>
</li>

<style>
	li {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		margin: 20px;
		background-color: white;
	}
	img {
		height: 200px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	li .item-info {
		padding: 0 10px;
	}
</style>
