import type {PagingOptions} from "$lib/utils/PagingOptions.js";
import type {PagingOptionsInApi} from "./PagingOptionsInApi.js";

export function apifyPagingOptions(pagingOptions: PagingOptions): PagingOptionsInApi {
	return {
		skip: (pagingOptions.number - 1) * pagingOptions.size,
		take: pagingOptions.size,
	};
}
