<script lang="ts">
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";

	import type PopulatedProduct from "./types/PopulatedProduct.js";
	import ProductListItem from "./ProductListItem.svelte";

	let filt: (product: PopulatedProduct) => boolean = () => true;

	export let products: readonly PopulatedProduct[];

	let inputEl: HTMLInputElement;
	const handleInputChange = () => {
		const inputValue = inputEl.value.toLowerCase();
		filt = (product: PopulatedProduct) =>
			product.name ? product.name.toLowerCase().includes(inputValue) : false;
	};
</script>

<div class="product-list-page">
	<SubpageH1>Baza produktów</SubpageH1>
	<!-- <FilterMenu /> -->

	<div class="filter-menu">
		<div class="inline">
			<span>Szukaj </span>
			<input placeholder="Szukaj produktu..." bind:this={inputEl} on:change={handleInputChange} />
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
		{#each products.filter(filt) as product (product.id)}
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
