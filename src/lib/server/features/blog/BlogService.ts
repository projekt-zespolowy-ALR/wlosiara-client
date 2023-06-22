import type {BlogEntry, BlogEntry as Post} from "$lib/features/blog/types/BlogEntry.js";
import type {Page} from "$lib/server/utils/Page.js";
import type {PostsApiClient} from "$lib/server/features/blog/blog_api_client/BlogApiClient.js";
import type {PostInApi} from "./blog_api_client/types/PostInApi.js";
import type {DeepReadonly} from "ts-essentials";
import type {PagingOptions} from "$lib/utils/PagingOptions.js";
import {apifyPagingOptions} from "$lib/server/utils/apifyPagingOptions.js";

export class BlogService {
	private readonly postsApiClient: PostsApiClient;

	public constructor({postsApiClient}: {postsApiClient: PostsApiClient}) {
		this.postsApiClient = postsApiClient;
	}

	private async populatePostInApi(postInApi: PostInApi): Promise<BlogEntry> {
		// ToDo: get User by Id
		const author = {
			id: postInApi.authorId,
			username: "test",
			fav_products: [],
			avatarUrl:
				"https://t4.ftcdn.net/jpg/01/52/08/01/360_F_152080192_iEJvx6ZzHHXbj2cEBec91qn7zXWLBPdk.jpg",
		};

		return {
			...postInApi,
			text: postInApi.contentMd,
			author,
			comments: [],
		};
	}

	public async getPostsPage(
		pagingOptions: DeepReadonly<PagingOptions>,
		type: string
	): Promise<Page<Post>> {
		const postsPageInApi = await this.postsApiClient.fetchPostsPage(
			apifyPagingOptions(pagingOptions),
			type
		);
		const posts = await Promise.all(
			postsPageInApi.items.map((postInApi) => this.populatePostInApi(postInApi))
		);
		return {
			...postsPageInApi,
			items: posts,
		};
	}

	public async getPostById(targetPostId: string): Promise<Post> {
		const postInApi = await this.postsApiClient.fetchPostById(targetPostId);
		const post = await this.populatePostInApi(postInApi);
		return post;
	}
}
