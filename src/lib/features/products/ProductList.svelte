<script lang="ts">
	import {onMount} from "svelte";
	import {productStore} from "./productStore.js";
	import FilterMenu from "./FilterMenu.svelte";
	import {Product} from "./interfaces.d.js";
	import ProductListItem from "./ProductListItem.svelte";
	let productList: Product[];

	onMount(async () => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer 4dm1nT0k3n");
		myHeaders.append("Content-Type", "application/json");

		const requestOptions: RequestInit = {
			method: "GET",
			headers: myHeaders,
			body: null,
			redirect: "follow",
		};

		fetch("https://api.wlosiara.pl/v1/detailed-products", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				if (result.data) {
					const products = result.data.map((prod: any) => {
						const product: Product = {
							id: prod.id,
							name: prod.name,
							brand: "brand",
							ingredients: "ingredients",
							price: prod.price,
							description: "description",
							imageUrl: prod.imageUrl,
							category: prod.categories.name,
							subcategory: "subcategory",
							capacity: prod.volume,
							produktuctUrl: prod.referenceUrl,
						};
						return product;
					});
					if (products.length > 0) {
						productList = products;
						productStore.set(products);
					}
				}
			})
			.catch((error) => console.log("error", error));
	});
</script>

<div class="product-list-page">
	<h3>Baza produktów</h3>
	<FilterMenu />
	<ul>
		{#each $productStore as product (product.id)}
			<ProductListItem {product} />
		{/each}
		<!-- {#each productList as product (product.id)}
			<ProductListItem {product} />
		{/each} -->
	</ul>
</div>

<style>
	.product-list-page {
		background-color: #f9f9f9;
		min-height: 80vh;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	h3 {
		margin-left: 50px;
	}
</style>
