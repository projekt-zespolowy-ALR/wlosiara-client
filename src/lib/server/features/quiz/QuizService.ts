import type {QuizApiClient} from "$lib/server/features/quiz/quiz_api_client/QuizApiClient.js";
import type {Quiz} from "$lib/features/quiz/types/Quiz.js";

export class QuizService {
	private readonly quizzesApiClient: QuizApiClient;

	public constructor({quizzesApiClient}: {quizzesApiClient: QuizApiClient}) {
		this.quizzesApiClient = quizzesApiClient;
	}

	public async getQuizById(targetQuizId: string): Promise<Quiz> {
		const [
			quizInApi,
			{
				meta: {totalItemsCount: totalQuestionsCount},
			},
		] = await Promise.all([
			this.quizzesApiClient.fetchQuizById(targetQuizId),
			this.quizzesApiClient.fetchQuizQuestionsPage(targetQuizId, {skip: 0, take: 0}),
		]);
		const questionsPage = await this.quizzesApiClient.fetchQuizQuestionsPage(targetQuizId, {
			skip: 0,
			take: totalQuestionsCount,
		});
		const questions = await Promise.all(
			questionsPage.items.map(async (question) => ({
				...question,
				answers: await this.quizzesApiClient.fetchQuizQuestionAnswers(targetQuizId, question.id),
			}))
		);
		const quiz = {
			...quizInApi,
			questions,
		} as const;
		return quiz;
	}
}
