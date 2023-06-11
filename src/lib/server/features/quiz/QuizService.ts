import type {Page} from "$lib/server/utils/Page.js";
import type {QuizApiClient} from "$lib/server/features/quiz/quiz_api_client/QuizApiClient.js";
import type {Question} from "$lib/features/quiz/types/Question.js";
import type {Answer} from "$lib/features/quiz/types/Answer.js";
import type {AnswerToQuestion} from "$lib/features/quiz/types/AnswerToQuestion.js";
import type {HairType} from "$lib/features/quiz/types/HairType.js";
import type {QuizInApi } from "./quiz_api_client/types/QuizInApi.js";

export class QuizService {
	private readonly quizsApiClient: QuizApiClient;

	public constructor({quizsApiClient}: {quizsApiClient: QuizApiClient}) {
		this.quizsApiClient = quizsApiClient;
	}

    // private async populateQuizInApi(quizInApi: QuizInApi): Promise<Question[]> {
    //     const questions = 
    // }
	// public async getQuizPage(): Promise<Page<Question>> {
	// 	const quizPageInApi = await this.quizsApiClient.fetchQuizPage();
	// 	return {
	// 		...quizPageInApi,
	// 		items: quizPageInApi.items,
	// 	};
	// }

	// public async getQuizById(targetProductId: string): Promise<Product> {
	// 	const quizInApi = await this.quizsApiClient.fetchProductById(targetProductId);
	// 	return quiz;
	// }
}
