import type DataSource from "$lib/features/data_sources/types/DataSource.js";
import type Product from "./Product.js";

type ProductInDataSource = {
	product: Product;
	dataSource: DataSource;
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
	price: number | null;

	description: string | null;
};

export default ProductInDataSource;
