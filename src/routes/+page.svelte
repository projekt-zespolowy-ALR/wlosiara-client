<script lang="ts">
	import Content from "$lib/ui/content/Content.svelte";
	import Footer from "$lib/ui/footer/Footer.svelte";
	import Header from "$lib/ui/header/Header.svelte";
</script>

<div class="wrapper">
	<Header />
	<Content />
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
