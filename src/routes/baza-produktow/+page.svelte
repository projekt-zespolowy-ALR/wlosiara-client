<script lang="ts">
	import ProductList from "$lib/features/products/ProductList.svelte";
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/ui/header/Header.svelte";
</script>

<div class="wrapper">
	<Header />
	<ProductList />
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
