<script lang="ts">
	import {page} from "$app/stores";
	import {productStore} from "$lib/features/products/productStore.js";
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/header/Header.svelte";
	import type {Product} from "$lib/features/products/interfaces.d.js";
	import ProductPage from "$lib/features/products/ProductPage.svelte";
	import {onMount} from "svelte";

	const urlSegments = $page.url.pathname.split("/");

	const id = urlSegments[2];
	const exampleProduct: Product = {
		id: "-1",
		name: "No name",
		category: "No category",
		description: "No description",
		imageUrl: "",
		brand: "",
		ingredients: "",
		price: 0,
		capacity: "",
		produktuctUrl: "",
	};
	const productOrNull: Product =
		$productStore.find((product: Product) => product.id == id) || exampleProduct;
	let product: Product = productOrNull;

	onMount(async () => {
		if (productOrNull) {
			product = productOrNull;
		} else {
			var myHeaders = new Headers();
			myHeaders.append("Authorization", "Bearer 4dm1nT0k3n");
			myHeaders.append("Content-Type", "application/json");

			const requestOptions: RequestInit = {
				method: "GET",
				headers: myHeaders,
				body: null,
				redirect: "follow",
			};

			fetch("https://api.wlosiara.pl/v1/detailed-products/" + id, requestOptions)
				.then((response) => response.json())
				.then((result) => {
					if (result.data) {
						const prod = result.data;
						const productFetch: Product = {
							id: prod.id,
							name: prod.name,
							brand: "brand",
							ingredients: "ingredients",
							price: prod.price,
							description: "description",
							imageUrl: prod.imageUrl,
							category: prod.categories.name,
							capacity: prod.volume,
							produktuctUrl: prod.referenceUrl,
						};
						product = productFetch;
					} else {
						product = exampleProduct;
					}
				})
				.catch((error) => console.log("error", error));
		}
	});
</script>

<ProductPage {product} />
