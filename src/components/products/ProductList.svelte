<script type="ts">
	import {ProductStore} from "../../stores/productStore";
	import ProductListItem from "./ProductListItem.svelte";
</script>

<ul>
	{#each $ProductStore as product (product.id)}
    	<ProductListItem {product}/>
	{/each}
</ul>
