import type {ProductDataSource} from "$lib/features/product_data_sources/types/ProductDataSource.js";
import type {Product} from "../../products/types/Product.js";

export type ProductOffer = {
	product: Product;
	dataSource: ProductDataSource;
	/**
	 * The URL of the product's page in the data source.
	 * @example "https://www.hebe.pl/claresa-zel-do-laminacji-brwi-8-g-000000000000407817.html"
	 */
	referenceUrl: string | null;
	/**
	 * The URL of the product's image in the data source.
	 * May not always work due to CORS.
	 */
	imageUrl: string | null;
	/**
	 * The product's price in PLN in the data source if it's known, null otherwise.
	 * @example 9.99
	 * @example null
	 */
	pricePlnAsString: string | null;

	description: string | null;
};
