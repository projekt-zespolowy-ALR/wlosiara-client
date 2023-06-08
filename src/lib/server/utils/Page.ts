export type Page<TItem> = {
	items: TItem[];
	meta: {
		skip: number;
		take: number;
		totalItemsCount: number;
	};
};
