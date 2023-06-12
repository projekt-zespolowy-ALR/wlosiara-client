import {appConfig} from "../app_config/appConfig.js";
import {QuizApiClient} from "../features/quiz/quiz_api_client/QuizApiClient.js";

export const quizzesApiClient = new QuizApiClient({
	quizApiBaseUrl: appConfig.QUIZZES_API_BASE_URL,
});
