<script type="ts">
	import {page} from "$app/stores";
	import {ProductStore} from "../../../stores/productStore";
	import ProductListItem from "../../../components/products/ProductListItem.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Header from "../../../components/header/Header.svelte";
	import type {Product} from "src/components/products/interfaces";

	const urlSegments = $page.url.pathname.split("/");

	const id = urlSegments[2];
	const exampleProduct: Product = {
		id: "-1",
		name: "No name",
		category: "No category",
		description: "No description",
		image_url: "",
	};
	const product: Product =
		$ProductStore.find((product: Product) => product.id == id) || exampleProduct;
</script>

<div class="wrapper">
	<Header />
	<ProductListItem {product} />
	<Footer />
</div>

<style>
	.wrapper {
		height: 95vh;
		margin: 0;
		font-family: "Poppins", sans-serif;
		background-color: #f9f9f9;
	}
</style>
