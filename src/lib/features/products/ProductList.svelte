<script lang="ts">
	import {listen, onIdle} from "svelte-idle";
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";

	import type {Product} from "./types/Product.js";
	import ProductListItem from "./ProductListItem.svelte";
	import {page} from "$app/stores";
	import {goto} from "$app/navigation";
	import type {ProductCategory} from "$lib/features/products/types/ProductCategory.js";
	import type {DeepReadonly} from "ts-essentials";
	import type {Page} from "$lib/server/utils/Page.js";
	import {page as pageStore} from "$app/stores";
	import type {PagingOptions} from "$lib/utils/PagingOptions.js";
	export let pagingOptions: DeepReadonly<PagingOptions>;

	listen({
		timer: 2000, //idle after 2s
		cycle: 500,
	});
	let filt: (product: DeepReadonly<Product>) => boolean = () => true;

	export let productsPage: DeepReadonly<Page<Product & {isFavorite: boolean | null}>>;
	$: categories = productsPage
		? [...new Set(productsPage.items.flatMap((product) => product.categories))]
		: [];
	let selectedCategory: ProductCategory | null = null;
	$: visibleProducts = productsPage.items ? productsPage.items : [];
	let sortingType = "";

	const handleInputChange = (e: Event) => {
		const search = (e.target as HTMLInputElement).value;
		console.log(search);
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
			visibleProducts = productsPage.items.filter((product) =>
				selectedCategory ? product.categories.includes(selectedCategory) : true
			);
		} else {
			visibleProducts = productsPage.items;
		}
	};

	const handleSelectSortingType = () => {
		switch (sortingType) {
			case "price-ascending":
				visibleProducts = [...visibleProducts].sort(
					(a: DeepReadonly<Product>, b: DeepReadonly<Product>) => {
						const aOffer = a.offers[0];
						const bOffer = b.offers[0];
						if (aOffer?.pricePlnAsString && bOffer?.pricePlnAsString) {
							return Number(aOffer.pricePlnAsString) - Number(bOffer.pricePlnAsString);
						}
						return 0;
					}
				);
				break;
			case "price-descending":
				visibleProducts = [...visibleProducts].sort(
					(a: DeepReadonly<Product>, b: DeepReadonly<Product>) => {
						const aOffer = a.offers[0];
						const bOffer = b.offers[0];
						if (aOffer?.pricePlnAsString && bOffer?.pricePlnAsString) {
							return Number(aOffer.pricePlnAsString) - Number(bOffer.pricePlnAsString);
						}
						return 0;
					}
				);
				break;
			case "name-ascending":
				visibleProducts = [...visibleProducts].sort(
					(a: DeepReadonly<Product>, b: DeepReadonly<Product>) => {
						if (a.name && b.name) {
							return a.name.localeCompare(b.name);
						}
						return 0;
					}
				);

				break;
			case "name-descending":
				visibleProducts = [...visibleProducts].sort(
					(a: DeepReadonly<Product>, b: DeepReadonly<Product>) => {
						if (a.name && b.name) {
							return b.name.localeCompare(a.name);
						}
						return 0;
					}
				);
				break;
			default:
				visibleProducts = [...visibleProducts].sort(
					(a: DeepReadonly<Product>, b: DeepReadonly<Product>) => {
						if (a.name && b.name) {
							return a.name.localeCompare(b.name);
						}
						return 0;
					}
				);
				break;
		}
	};

	let searchInput: HTMLInputElement;

	onIdle(() => {
		console.log(searchInput);
		if (searchInput) {
			const search = searchInput.value;
			console.log(search);
			const url = new URL($page.url);
			if (search) {
				url.searchParams.set("search", search);
			} else {
				url.searchParams.delete("search");
			}
			goto(url, {keepFocus: true});
		}
	});
</script>

<div class="product-list-page">
	<SubpageH1>Baza produktów</SubpageH1>
	<!-- <FilterMenu /> -->

	<div class="pagination-buttons">
		<!-- Todo: Style and refactor -->
		<a
			href={(() => {
				const newUrl = new URL($pageStore.url);
				newUrl.searchParams.set("page-number", (pagingOptions.number - 1).toString());
				return newUrl.href;
			})()}
		>
			<button><i class="fa-solid fa-caret-left" /></button>
		</a>
		<button class="unclickable">{pagingOptions.number}</button>
		<a
			href={(() => {
				const newUrl = new URL($pageStore.url);
				newUrl.searchParams.set("page-number", (pagingOptions.number + 1).toString());
				return newUrl.href;
			})()}
		>
			<button><i class="fa-solid fa-caret-right" /></button>
		</a>
	</div>
	<div class="filter-menu">
		<div class="inline">
			<span>Szukaj </span>
			<input
				placeholder="Szukaj produktu..."
				value={$page.url.searchParams.get("search") || ""}
				on:focusout={handleInputChange}
				bind:this={searchInput}
			/>
		</div>
		<div class="inline">
			<span>Sortuj </span>
			<select name="sort" id="sort" bind:value={sortingType} on:change={handleSelectSortingType}>
				<option value="name-ascending">nazwa rosnąco</option>
				<option value="name-descending">nazwa malejąco</option>
				<option value="price-ascending">cena rosnąco</option>
				<option value="price-descending">cena malejąco</option>
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
	.pagination-buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.pagination-buttons button {
		height: 25px;
		width: 30px;
		font-size: 14px;
		background-color: #fff;
		border: 1px solid white;
		border-radius: 5px;
		margin: 5px;
		line-height: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 10px;
		font-family: "Poppins", sans-serif;
		box-shadow: 3px 3px 5px lightgray;
	}
	button:not(.unclickable) {
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
	a button i {
		color: var(--primary-color-3);
		font-size: 20px;
	}
</style>
