import {appConfig} from "../app_config/appConfig.js";
import {PostsApiClient} from "../features/blog/blog_api_client/BlogApiClient.js";

export const blogApiClient = new PostsApiClient({
	postsApiBaseUrl: appConfig.BLOG_API_BASE_URL,
});
