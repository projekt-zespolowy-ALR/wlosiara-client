import type {BlogEntry, BlogEntry as Post} from "$lib/features/blog/types/BlogEntry.js";
import type {
	BlogComment,
	BlogComment as PostComment,
} from "$lib/features/blog/types/BlogComment.js";
import type {Page} from "$lib/server/utils/Page.js";
import type {PostsApiClient} from "$lib/server/features/blog/blog_api_client/PostsApiClient.js";
import type {PostInApi} from "./blog_api_client/types/PostInApi.js";

export class PostsService {
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
		};

		return {
			...postInApi,
			text: postInApi.contentMd,
			author,
		};
	}

	public async getPostsPage(): Promise<Page<Post>> {
		const postsPageInApi = await this.postsApiClient.fetchPostsPage();
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

	public async getPostComments(targetPostId: string): Promise<Page<BlogComment>> {
		const commentsPageInApi = await this.postsApiClient.fetchPostCommentsPage(targetPostId);
		const postCommentsInApi = (await this.postsApiClient.fetchPostCommentsPage(targetPostId)).items;

		return {
			...commentsPageInApi,
			items: postCommentsInApi,
		};
	}

	public async getPostCommentsById(
		postId: string,
		targetPostCommentId: string
	): Promise<PostComment> {
		const commentInApi = await this.postsApiClient.fetchPostCommentById(
			postId,
			targetPostCommentId
		);

		return commentInApi;
	}
}
