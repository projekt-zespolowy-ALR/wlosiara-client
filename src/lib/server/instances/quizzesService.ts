import {QuizService} from "../features/quiz/QuizService.js";
import {quizzesApiClient} from "./quizzesApiClient.js";

export const quizzesService = new QuizService({
	quizzesApiClient: quizzesApiClient,
});
