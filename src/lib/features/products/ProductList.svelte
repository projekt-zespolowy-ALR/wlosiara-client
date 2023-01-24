<script lang="ts">
	import {onMount} from "svelte";
	import {productStore} from "./productStore.js";
	import {Product} from "./interfaces.d.js";
	import ProductListItem from "./ProductListItem.svelte";
	let productList: Product[] = $productStore;

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
				if (result.data) {
					const products: Product[] = result.data.map((prod: any) => {
						const dataSource = prod.inDataSources;
						let price;
						let referenceUrl;
						let imageUrl;
						if (dataSource && dataSource[0]) {
							price = Number.parseFloat(dataSource[0].price);
							referenceUrl = dataSource[0].referenceUrl;
							imageUrl = dataSource[0].imageUrl;
						} else {
							price = 0;
							referenceUrl = "";
							imageUrl = "";
						}
						const product: Product = {
							id: prod.id,
							name: prod.name,
							brand: "brand",
							ingredients: "ingredients",
							price: price,
							description: "description",
							imageUrl: imageUrl,
							category: prod.categories[0]?.name,
							capacity: prod.volume,
							produktuctUrl: referenceUrl,
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

	let inputEl: HTMLInputElement;
	const handleInputChange = (e: any) => {
		const inputValue = inputEl.value.toLowerCase();
		let newProducts = $productStore.filter((product: Product) =>
			product.name.toLowerCase().includes(inputValue)
		);

		productList = newProducts;
	};
</script>

<div class="product-list-page">
	<h3>Baza produktów</h3>
	<!-- <FilterMenu /> -->

	<div class="filter-menu">
		<div class="inline">
			<span>Szukaj </span>
			<input
				placeholder="Szukaj produktu..."
				bind:this={inputEl}
				on:change={(e) => handleInputChange(e)}
			/>
		</div>
		<div class="inline">
			<span>Sortuj </span>
			<select name="sort" id="sort">
				<option value="increasing">cena rosnąco</option>
				<option value="decreasing">cena malejąco</option>
			</select>
		</div>
		<div class="inline">
			<span>Filtruj</span>
			<select>
				<option value="keyword">keyword</option>
				<option value="keyword">keyword2</option>
			</select>
		</div>
	</div>

	<ul>
		<!-- {#each $productStore as product (product.id)}
			<ProductListItem {product} />
		{/each} -->
		{#each productList as product (product.id)}
			<ProductListItem {product} />
		{/each}
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
	.filter-menu {
		display: flex;
		flex-direction: column;
		margin-left: 50px;
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		width: 300px;
		background-color: white;
		padding: 10px;
		font-size: 12px;
	}
	.inline {
		display: inline-block;
	}
</style>
