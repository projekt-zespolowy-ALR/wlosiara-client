<script lang="ts">
	import {postStore} from "./postStore.js";
	import PostListItem from "./PostListItem.svelte";
	import {isAuthenticated} from "../../../authStore.js";
</script>

<div class="product-list-page">
	<h3>Baza wiedzy</h3>
	<ul>
		{#each $postStore as post (post.id)}
			<PostListItem {post} />
		{/each}
		{#if $isAuthenticated}
			<li class="add">
				<a href="/baza-wiedzy/add">
					<button>
						<i class="fa-solid fa-plus" />
						<span>Dodaj post</span>
					</button>
				</a>
			</li>
		{/if}
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

	li a {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 250px;
		height: 290px;
		padding: 10px 20px;
	}
	li {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		margin: 20px;
		background-color: white;
	}

	li a button {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 200px;
		width: 200px;
		border: 1px solid var(--gray-7);
		border-radius: 10px;
		background-color: white;
		color: var(--gray-5);
	}

	button i {
		margin-top: 30px;
		margin-bottom: 30px;
		font-size: 30px;
	}

	li a button:hover {
		color: var(--gray-3);
		border-color: var(--gray-3);
		transition: 0.3s;
	}
</style>
