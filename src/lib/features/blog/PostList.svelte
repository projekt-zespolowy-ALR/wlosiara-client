<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";

	import PostListItem from "./PostListItem.svelte";
	export let currentUser: DeepReadonly<User> | null;
	import type {BlogEntry} from "./types/BlogEntry.js";
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";

	export let blogEntriesPage: DeepReadonly<Page<BlogEntry>>;

	import {page} from "$app/stores";

	import {goto} from "$app/navigation";
	import type {User} from "../users/types/User.js";
	import type {Page} from "$lib/server/utils/Page.js";

	const handleSearchInputChange = (e: Event) => {
		const search = (e.target as HTMLInputElement).value;
		const url = new URL($page.url);
		if (search) {
			url.searchParams.set("search", search);
		} else {
			url.searchParams.delete("search");
		}
		goto(url, {keepFocus: true});
	};
</script>

<div class="product-list-page">
	<SubpageH1>Baza wiedzy</SubpageH1>
	<input
		type="text"
		placeholder="Szukaj"
		value={$page.url.searchParams.get("search") || ""}
		on:input={handleSearchInputChange}
	/>
	<ul>
		{#each blogEntriesPage.items as blogEntry (blogEntry.id)}
			<PostListItem {blogEntry} />
		{/each}
		{#if currentUser}
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
