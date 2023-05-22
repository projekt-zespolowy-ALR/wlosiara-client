<script lang="ts">
	import type PopulatedProduct from "../../products/types/PopulatedProduct.js";

	export let favProducts: PopulatedProduct[];
</script>

<div class="fav-products-short">
	<p>Ulubione produkty</p>
	<ul>
		{#each favProducts as product (product.id)}
			<li>
				<a href="/user/fav-products">
					<button>
						{#if product.inDataSources[0]}
							<div class="img">
								<img src={product.inDataSources[0].imageUrl} alt={product.name} />
							</div>
						{:else}
							<p>Brak danych</p>
						{/if}
					</button>
				</a>
			</li>
		{/each}

		<li>
			<a href="/user/fav-products">
				<button>
					<span>Zobacz więcej ulubionych</span>
				</button>
			</a>
		</li>
	</ul>
</div>

<style>
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
		height: 150px;
		width: 150px;
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
	.img {
		height: 200px;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	img {
		width: 100%;
		height: 100%;
		/*object-fit: cover;*/
	}
</style>
