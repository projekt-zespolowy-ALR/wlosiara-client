<script lang="ts">
	import type {BlogEntry} from "./interfaces.d.js";

	export let post: BlogEntry;
</script>

<li>
	<a href="/baza-wiedzy/{post.id}">
		<img src={post.imageUrl} alt={post.title} />
		<div class="item-info">
			<p>{post.title}</p>
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
		height : 200px;
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
