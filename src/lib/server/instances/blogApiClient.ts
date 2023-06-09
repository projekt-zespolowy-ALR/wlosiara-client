import {appConfig} from "../app_config/appConfig.js";
import {PostsApiClient} from "../features/blog/blog_api_client/PostsApiClient.js";

export const blogApiClient = new PostsApiClient({
	postsApiBaseUrl: appConfig.POSTS_API_BASE_URL,
});
