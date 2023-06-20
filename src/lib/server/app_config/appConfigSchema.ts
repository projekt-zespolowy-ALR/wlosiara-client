import envalid from "envalid";

export const appConfigSchema = {
	PRODUCTS_API_BASE_URL: envalid.str(),
	QUIZZES_API_BASE_URL: envalid.str(),
	QUIZ_ID: envalid.str(),
	BLOG_API_BASE_URL: envalid.str(),
	USERS_API_BASE_URL: envalid.str(),
	AUTH_API_BASE_URL: envalid.str(),
	SESSION_TOKEN_COOKIE_NAME: envalid.str({default: "session_token"}),
};
