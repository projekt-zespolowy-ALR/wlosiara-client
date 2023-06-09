import envalid from "envalid";

export const appConfigSchema = {
	PRODUCTS_API_BASE_URL: envalid.str(),
	QUIZZES_API_BASE_URL: envalid.str(),
	QUIZ_ID: envalid.str(),
	BLOG_API_BASE_URL: envalid.str(),
};
