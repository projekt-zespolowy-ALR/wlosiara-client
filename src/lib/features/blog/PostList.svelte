<script lang="ts">
	import {postStore} from "./postStore.js";
	import PostListItem from "./PostListItem.svelte";
</script>

<div class="product-list-page">
	<h3>Baza wiedzy</h3>
	<a href="/baza-wiedzy/add"><button>Dodaj post</button></a>
	<ul>
		{#each $postStore as post (post.id)}
			<PostListItem {post} />
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
</style>
