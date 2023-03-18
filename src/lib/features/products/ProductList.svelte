<script lang="ts">
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";

	import type PopulatedProduct from "./types/PopulatedProduct.js";
	import ProductListItem from "./ProductListItem.svelte";
	import {page} from "$app/stores";
	import {goto} from "$app/navigation";
	import type ProductCategory from "$lib/features/products/types/ProductCategory.js";

	let filt: (product: PopulatedProduct) => boolean = () => true;

	export let products: readonly PopulatedProduct[];
	let categories: ProductCategory[] = products
		? [...new Set(products.flatMap((product) => product.categories))]
		: [];
	let selectedCategory: ProductCategory | null = null;
	let visibleProducts: readonly PopulatedProduct[] = products ? products : [];

	const handleInputChange = (e: Event) => {
		const search = (e.target as HTMLInputElement).value;
		const url = new URL($page.url);
		if (search) {
			url.searchParams.set("search", search);
		} else {
			url.searchParams.delete("search");
		}
		goto(url, {keepFocus: true});
	};
	const handleSelectCategoryChange = () => {
		if (selectedCategory) {
			visibleProducts = products.filter((product) =>
				selectedCategory ? product.categories.includes(selectedCategory) : true
			);
		} else {
			visibleProducts = products;
		}
	};
</script>

<div class="product-list-page">
	<SubpageH1>Baza produktów</SubpageH1>
	<!-- <FilterMenu /> -->

	<div class="filter-menu">
		<div class="inline">
			<span>Szukaj </span>
			<input
				placeholder="Szukaj produktu..."
				value={$page.url.searchParams.get("search") || ""}
				on:input={handleInputChange}
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
			<select bind:value={selectedCategory} on:change={handleSelectCategoryChange}>
				<option value={null}>---</option>
				{#each categories as category (category.id)}
					<option value={category}>{category.name}</option>
				{/each}
			</select>
		</div>
	</div>

	<ul>
		<!-- {#each $productStore as product (product.id)}
			<ProductListItem {product} />
		{/each} -->
		<!--{#each products.filter(filt) as product (product.id)}-->
		{#each visibleProducts.filter(filt) as product (product.id)}
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
