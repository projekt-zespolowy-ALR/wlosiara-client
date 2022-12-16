import {writable, type Writable} from "svelte/store";
import {Product} from "./interfaces.js";

const productStore: Writable<Product[]> = writable([
	{
		id: "0",
		name: "Tołpa green",
		brand: "Tołpa",
		// ingredients: ['Aqua', 'Lauryl Glucoside', 'Sodium Coco-Sulfate', 'Glycerin', 'Polyglyceryl-4 Caprate', 'Betaine', 'Cannabis Sativa Seed Oil', 'Persea Gratissima Oil', 'Olus Oil', 'Tocopherol', 'Peat Extract', 'Hydroxypropyl Guar Hydroxypropyltrimonium Chloride', 'Lactic Acid', 'Parfum', 'Methylpropanediol', 'Benzoic Acid', 'Caprylyl Glycol', 'Triethyl Citrate', 'Glyceryl Caprylate'],
		ingredients:
			"Aqua, Lauryl Glucoside, Sodium Coco-Sulfate, Glycerin, Polyglyceryl-4 Caprate, Betaine, Cannabis Sativa Seed Oil, Persea Gratissima Oil, Olus Oil, Tocopherol, Peat Extract, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Lactic Acid, Parfum, Methylpropanediol, Benzoic Acid, Caprylyl Glycol, Triethyl Citrate, Glyceryl Caprylate",
		price: 20.99,
		description: "wzmacniający szampon do włosów, 300 ml",
		imageUrl:
			"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
		category: "szampon",
		subcategory: "wzmacniajacy",
		capacity: "300 ml",
		produktuctUrl:
			"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	},
	{
		id: "1",
		name: "Tołpa green 1",
		brand: "Tołpa",
		ingredients:
			"Aqua, Lauryl Glucoside, Sodium Coco-Sulfate, Glycerin, Polyglyceryl-4 Caprate, Betaine, Cannabis Sativa Seed Oil, Persea Gratissima Oil, Olus Oil, Tocopherol, Peat Extract, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Lactic Acid, Parfum, Methylpropanediol, Benzoic Acid, Caprylyl Glycol, Triethyl Citrate, Glyceryl Caprylate",
		price: 20.99,
		description: "wzmacniający szampon do włosów, 300 ml",
		imageUrl:
			"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
		category: "szampon",
		subcategory: "wzmacniajacy",
		capacity: "300 ml",
		produktuctUrl:
			"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	},
	{
		id: "2",
		name: "Tołpa green 2",
		brand: "Tołpa",
		ingredients:
			"Aqua, Lauryl Glucoside, Sodium Coco-Sulfate, Glycerin, Polyglyceryl-4 Caprate, Betaine, Cannabis Sativa Seed Oil, Persea Gratissima Oil, Olus Oil, Tocopherol, Peat Extract, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Lactic Acid, Parfum, Methylpropanediol, Benzoic Acid, Caprylyl Glycol, Triethyl Citrate, Glyceryl Caprylate",
		price: 20.99,
		description: "wzmacniający szampon do włosów, 300 ml",
		imageUrl:
			"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
		category: "szampon",
		subcategory: "wzmacniajacy",
		capacity: "300 ml",
		produktuctUrl:
			"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	},
	{
		id: "3",
		name: "Tołpa green",
		brand: "Tołpa",
		ingredients:
			"Aqua, Lauryl Glucoside, Sodium Coco-Sulfate, Glycerin, Polyglyceryl-4 Caprate, Betaine, Cannabis Sativa Seed Oil, Persea Gratissima Oil, Olus Oil, Tocopherol, Peat Extract, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Lactic Acid, Parfum, Methylpropanediol, Benzoic Acid, Caprylyl Glycol, Triethyl Citrate, Glyceryl Caprylate",
		price: 20.99,
		description: "wzmacniający szampon do włosów, 300 ml",
		imageUrl:
			"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
		category: "szampon",
		subcategory: "wzmacniajacy",
		capacity: "300 ml",
		produktuctUrl:
			"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	},
	{
		id: "4",
		name: "Tołpa green",
		brand: "Tołpa",
		ingredients:
			"Aqua, Lauryl Glucoside, Sodium Coco-Sulfate, Glycerin, Polyglyceryl-4 Caprate, Betaine, Cannabis Sativa Seed Oil, Persea Gratissima Oil, Olus Oil, Tocopherol, Peat Extract, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Lactic Acid, Parfum, Methylpropanediol, Benzoic Acid, Caprylyl Glycol, Triethyl Citrate, Glyceryl Caprylate",
		price: 20.99,
		description: "wzmacniający szampon do włosów, 300 ml",
		imageUrl:
			"https://www.hebe.pl/dw/image/v2/BDDS_PRD/on/demandware.static/-/Sites-PL_Master_Catalog/default/dw05ebd837/images/hi-res/385903__tolpa_green_wzmocnienie_Szampon_do_wlosczonych_i_pozbawionych_witalnosci_300_ml__BB__1.png?sw=315&sh=315&sm=fit",
		category: "szampon",
		subcategory: "wzmacniajacy",
		capacity: "300 ml",
		produktuctUrl:
			"https://www.hebe.pl/tolpa-regenerujacy-szampon-do-wlosow-300-ml-000000000000385948.html",
	},
]);

export {productStore};
