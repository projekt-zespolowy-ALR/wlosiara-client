import type Brand from "$lib/features/brands/types/Brand.js";
import type Ingredient from "./Ingredient.js";
import type PopulatedProductInDataSource from "./PopulatedProductInDataSource.js";
import type Product from "./Product.js";
import type ProductCategory from "./ProductCategory.js";

type PopulatedProduct = Omit<Product, "brandId" | "categoryIds"> & {
	/**
	 * Information about the product's availability in the data sources.
	 */
	inDataSources: Omit<PopulatedProductInDataSource, "product">[];

	ingredients: Ingredient[];

	categories: ProductCategory[];

	brand: Brand;
};

export default PopulatedProduct;
