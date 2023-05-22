<script lang="ts">
	import type PopulatedBlogEntry from "./types/PopulatedBlogEntry.js";
	import SubpageH1 from "$lib/ui/subpage_h1/SubpageH1.svelte";
	import Markdown from "@magidoc/plugin-svelte-marked";
	import type {DeepReadonly} from "ts-essentials";

	export let blogEntry: DeepReadonly<PopulatedBlogEntry>;
</script>

<div class="page">
	<a class="back" href="/baza-wiedzy"><i class="fa-sharp fa-solid fa-backward-step" /></a>
	<div class="post">
		<img src={blogEntry.imageUrl} alt="" srcset="" />
		<SubpageH1>{blogEntry.title}</SubpageH1>
		<p>{blogEntry.author.username}</p>
		<div id="content">
			<Markdown source={blogEntry.text} />
		</div>
	</div>
</div>

<style>
	.page {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 25px;
		margin: 40px;
		background-color: white;
		padding: 25px;
		text-align: justify;
	}
	.post {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15px;
		max-width: 1200px;
		margin: 0px auto;
	}
	img {
		height: 400px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	.back {
		color: var(--primary-color-3);
		font-size: 30px;
	}

	#content {
		margin: 30px;
	}
</style>
