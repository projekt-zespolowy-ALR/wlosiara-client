<script type="ts">
	import type { Product } from "./interfaces";


    export let product: Product;
</script>

<li>
    <p>{product.id}</p>
    <p>{product.name}</p>
    <img src={product.image_url} alt={product.name}/>
</li>

