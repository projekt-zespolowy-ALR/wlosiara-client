<script lang="ts">
	import {page} from "$app/stores";
	import {productStore} from "$lib/features/products/productStore.js";
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/ui/header/Header.svelte";
	import type {Product} from "$lib/features/products/interfaces.d.js";
	import ProductPage from "$lib/features/products/ProductPage.svelte";

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
		$productStore.find((product: Product) => product.id == id) || exampleProduct;
</script>

<Header />
<ProductPage {product} />
<Footer />
