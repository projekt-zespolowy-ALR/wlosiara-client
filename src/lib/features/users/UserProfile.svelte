<script lang="ts">
	import type User from "./types/User.js";
	import currentUserStore from "$lib/features/auth/currentUserStore.js";
</script>

<div class="user-profile-page">
	<div class="user-header">
		{#if $currentUserStore}
			<h3>{$currentUserStore.username}</h3>
		{:else}<span>username</span>{/if}
	</div>
	<div class="fav-products-short">
		<p>Ulubione produkty</p>
		<ul>
			<li>
				<a href="/user/fav-products">
					<button>
						<span>Product</span>
					</button>
				</a>
			</li>
			<li>
				<a href="/user/fav-products">
					<button>
						<span>Zobacz więcej ulubionych</span>
					</button>
				</a>
			</li>
		</ul>
	</div>
	<div class="user-info">
		{#if $currentUserStore}
			<p>{$currentUserStore.id}</p>
		{:else}<span>id</span>{/if}
	</div>
</div>

<style>
	div.user-profile-page,
	div.fav-products-short {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
	}
	a button {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100px;
		width: 100px;
		border: 1px solid var(--gray-7);
		border-radius: 10px;
		background-color: white;
		color: var(--gray-5);
	}
	a button:hover {
		color: var(--primary-color-3);
		border: 1px solid var(--primary-color-3);
		transition: 0.3s;
	}
	a {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
