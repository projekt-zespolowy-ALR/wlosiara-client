import type {PageInApi} from "$lib/server/utils/PageInApi.js";
import type {QuizInApi} from "./types/QuizInApi.js";
import type {QuizQuestionInApi} from "./types/QuizQuestionInApi.js";
import type {QuizQuestionAnswerInApi} from "./types/QuizQuestionAnswerInApi.js";

export class QuizApiClient {
	private readonly quizApiBaseUrl: string;
	public constructor({quizApiBaseUrl}: {quizApiBaseUrl: string}) {
		this.quizApiBaseUrl = quizApiBaseUrl;
	}
	async fetchQuizPage(): Promise<PageInApi<QuizInApi>> {
		const response = await fetch(`${this.quizApiBaseUrl}/quiz`);
		const quizPage = await response.json();
		return quizPage;
	}

	async fetchQuizById(targetQuizId: string): Promise<QuizInApi> {
		const response = await fetch(`${this.quizApiBaseUrl}/quiz/${targetQuizId}`);
		const quiz = await response.json();
		return quiz;
	}

	async fetchQuizQuestionPage(quizId: string): Promise<PageInApi<QuizQuestionInApi>> {
		const response = await fetch(`${this.quizApiBaseUrl}/quiz`);
		const quizPage = await response.json();
		return quizPage;
	}

	async fetchQuizQuestionById(quizId: string, targetQuizQuestionId: string): Promise<QuizQuestionInApi> {
		const response = await fetch(`${this.quizApiBaseUrl}/quiz/${quizId}/questions/${targetQuizQuestionId}`);
		const quiz = await response.json();
		return quiz;
	}

    async fetchQuizQuestionAnswerById(quizId: string, targetQuestionAnswerId: string): Promise<QuizQuestionAnswerInApi> {
		const response = await fetch(`${this.quizApiBaseUrl}/quiz/${quizId}/answers/${targetQuestionAnswerId}`);
		const quiz = await response.json();
		return quiz;
	}
}
