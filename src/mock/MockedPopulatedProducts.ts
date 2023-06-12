//import type PopulatedProduct from "$lib/features/products/types/PopulatedProduct.js";
import type {ProductBrand} from "$lib/features/product_brands/types/ProductBrand.js";
import type {ProductOffer} from "$lib/features/product_offers/types/ProductOffer.js";
import type {Product} from "$lib/features/products/types/Product.js";
import type {DeepReadonly} from "ts-essentials";

const tolpaBrand: DeepReadonly<ProductBrand> = {
	id: "0",
	name: "Tołpa",
	slug: "tolpa"
}

const tolpaInDataSource = {
	dataSource: {
		id: "0",
		name: "hebe",
		slug: "hebe",
		url: "https://www.hebe.pl/",
	},
	referenceUrl:
		"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	imageUrl:
		"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
	price: 20.99,
	description: "wzmacniający szampon do włosów, 300 ml",
};

const tolpaProduct: DeepReadonly<Product> = {
	id: "0",
	name: "Tołpa green",
	mass: 300,
	volume: 300,
	slug: "tolpa-green",
	brand: tolpaBrand,
	categories: [],
	offers: [tolpaInDataSource],
	ingredients: []
};


const tolpaPopulatedProduct: DeepReadonly<Product> = {
	...tolpaProduct,
	brand: {name: "Tołpa"} as ProductBrand,
	ingredients: [
		{id: "1", name: "Aqua", slug: "aqua"},
		{id: "2 ", name: "Lauryl Glucoside", slug: "lauryl-glucoside"},
		{id: "3", name: "Sodium Coco-Sulfate", slug: "sodium-coco"},
		{id: "4", name: "Glycerin", slug: "glycerin"},
		{id: "5", name: "Polyglyceryl-4 Caprate", slug: "polyglyceryl"},
		{id: "6", name: "Betaine", slug: "betaine"},
		{id: "7", name: "Cannabis Sativa Seed Oil", slug: "cannabis-oil"},
	],
	categories: [{id: "1", name: "szampon", slug: "szampon"}],
};

const mockedPopulatedProducts: DeepReadonly<Product[]> = [
	tolpaPopulatedProduct,
	{
		...tolpaPopulatedProduct,
		id: "1",
		name: "Tołpa green 1",
	},
	{
		...tolpaPopulatedProduct,
		id: "2",
		name: "Tołpa green 2",
	},
	{
		...tolpaPopulatedProduct,
		id: "3",
		name: "Tołpa green 3",
	},
	{
		...tolpaPopulatedProduct,
		id: "4",
		name: "Tołpa green 4",
		categories: [{id: "2", name: "odżywka", slug: "odżywka"}],
	},
];


export default mockedPopulatedProducts;