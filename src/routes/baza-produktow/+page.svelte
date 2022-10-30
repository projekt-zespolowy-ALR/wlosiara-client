<script type="ts">
	import ProductList from "../../components/products/ProductList.svelte";
	import Footer from "../../components/Footer.svelte";
	import Header from "../../components/header/Header.svelte";
</script>

<div class="wrapper">
	<Header />
	<ProductList/>
	<Footer />
</div>

<style>
	.wrapper {
		height: 95vh;
		margin: 0;
	}
</style>
