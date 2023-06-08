<script lang="ts">
	import type {DeepReadonly} from "ts-essentials";
	import type {BlogEntry} from "./types/BlogEntry.js";

	export let blogEntry: DeepReadonly<BlogEntry>;
</script>

<li>
	<a href="/baza-wiedzy/{blogEntry.id}">
		<img src={blogEntry.imageUrl} alt="" />
		<div class="item-info">
			<p>{blogEntry.title}</p>
		</div>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	li {
		box-shadow: 3px 3px 5px lightgray;
		border-radius: 5%;
		margin: 20px;
		background-color: white;
		padding: 10px 20px;
		width: 250px;
	}
	/*img {*/
	/*	height: 200px;*/
	/*	border-top-left-radius: 5%;*/
	/*	border-top-right-radius: 5%;*/
	/*	margin-bottom: 10px;*/
	/*}*/

	img {
		width: 210px;
		height: 200px;
		max-height: 100%;
		max-width: 100%;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
		margin-bottom: 10px;
	}

	li .item-info {
		padding: 0 10px;
		text-align: center;
	}
</style>
