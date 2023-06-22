<script lang="ts">
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";
	import type {DeepReadonly} from "ts-essentials";
	import type {Page} from "$lib/server/utils/Page.js";

	import PostListItem from "$lib/features/blog/PostListItem.svelte";
	import type {BlogEntry} from "$lib/features/blog/types/BlogEntry.js";

	export let blogEntriesPage: DeepReadonly<Page<BlogEntry>>;
</script>

<div class="landing-page">
	<SubpageH1>Witaj w serwisie włosiara.pl!</SubpageH1>
	<p>
		Wypełnij nasz quiz i dowiedz się jaki masz rodziaj włosów:
		<a href="/quiz">
			<button>Wypełnij Quiz</button>
		</a>
	</p>
	<h3>Najnowsze posty:</h3>
	<ul>
		{#each blogEntriesPage.items as blogEntry (blogEntry.id)}
			<PostListItem {blogEntry} />
		{/each}
	</ul>
</div>

<style>
	.landing-page {
		padding: 20px;
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
	a {
		margin-left: 10px;
	}
	button {
		background-color: var(--primary-color-3);
		border: none;
		border-radius: 5px;
		color: var(--gray-8);
		padding: 5px 10px;
		margin: 10px 0;
		cursor: pointer;
	}
</style>
