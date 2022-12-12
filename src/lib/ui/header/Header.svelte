<script lang="ts">
	import Navbar from "./Navbar.svelte";
</script>

<div class="header">
	<img src="images/logo.jpg" alt="włosiara.pl" class="logo" />
	<Navbar />
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--gray-8);
	}
	.logo {
		height: 50px;
	}
</style>
