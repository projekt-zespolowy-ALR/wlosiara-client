<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";

	import PostListItem from "./PostListItem.svelte";
	// export let currentUser: DeepReadonly<User> | null;
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
</style>
