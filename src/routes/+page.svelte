<script type="ts">
	import Content from "../components/Content.svelte";
	import Footer from "../components/Footer.svelte";
    import Header from "../components/header/Header.svelte";
</script>

<div class="wrapper">
<Header/>
<Content/>
<Footer/>
</div>

<style>
	.wrapper {
		height: 95vh;
		margin: 0;
	}
</style>
