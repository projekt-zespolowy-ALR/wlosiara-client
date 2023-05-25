import type {PageMeta} from "./PageMeta.js";

export type Page<TItem> = {
	items: TItem[];

	meta: PageMeta;
};
