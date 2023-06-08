export type PageInApi<TItemInApi> = {
	items: TItemInApi[];
	meta: {
		skip: number;

		take: number;

		totalItemsCount: number;

		pageItemsCount: number;
	};
};
