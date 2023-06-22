<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";

	import PostListItem from "./PostListItem.svelte";
	import type {BlogEntry} from "./types/BlogEntry.js";
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";

	export let blogEntriesPage: DeepReadonly<Page<BlogEntry>>;
	export let type: string;

	import type {Page} from "$lib/server/utils/Page.js";
</script>

<div class="product-list-page">
	<SubpageH1>{type === "news" ? "Aktualności" : "Baza wiedzy"}</SubpageH1>

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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
