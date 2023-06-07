import type Brand from "$lib/features/brands/types/Brand.js";
import type Ingredient from "./Ingredient.js";
import type ProductCategory from "./ProductCategory.js";
import type ProductInDataSource from "./ProductInDataSource.js";

type Product = {
	/**
	 * The product's id in UUID format.
	 * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
	 */
	id: string;

	/**
	 * The product's name if it's known, null otherwise.
	 * @example "CLARESA TRUE GLUE"
	 * @example null
	 */
	name: string | null;

	/**
	 * The product's slug. Use it in the links but use the `id` for API requests.
	 * @example "claresa-true-glue"
	 */
	slug: string;

	/**
	 * The product's mass in killograms if it's known, null otherwise.
	 * @example 0.4
	 * @example null
	 */
	mass: number | null;

	/**
	 * The product's volume in liters if it's known, null otherwise.
	 * @example 0.4
	 * @example null
	 */
	volume: number | null;

	/**
	 * The product's categories.
	 */
	categories: ProductCategory[];

	brand: Brand;

	inDataSources: Omit<ProductInDataSource, "product">[];

	ingredients: Ingredient[] | null;
};

export default Product;
