import type {PageInApi} from "$lib/server/utils/PageInApi.js";
import type {QuizInApi} from "./types/QuizInApi.js";
import type {QuizQuestionInApi} from "./types/QuizQuestionInApi.js";
import type {QuizQuestionAnswerInApi} from "./types/QuizQuestionAnswerInApi.js";
import type {PagingOptionsInApi} from "$lib/server/utils/PagingOptionsInApi.js";
import type {DeepReadonly} from "ts-essentials";

export class QuizApiClient {
	private readonly quizApiBaseUrl: string;
	public constructor({quizApiBaseUrl}: {quizApiBaseUrl: string}) {
		this.quizApiBaseUrl = quizApiBaseUrl;
	}
	async fetchQuizzesPage(
		pagingOptions: DeepReadonly<PagingOptionsInApi>
	): Promise<PageInApi<QuizInApi>> {
		const response = await fetch(
			`${this.quizApiBaseUrl}/quiz?skip=${pagingOptions.skip}&take=${pagingOptions.take}`
		);
		const quizzesPage = await response.json();
		return quizzesPage;
	}

	async fetchQuizById(targetQuizId: string): Promise<QuizInApi> {
		const response = await fetch(`${this.quizApiBaseUrl}/quizzes/${targetQuizId}`);
		const quiz = await response.json();
		return quiz;
	}

	async fetchQuizQuestionsPage(
		quizId: string,
		pagingOptions: DeepReadonly<PagingOptionsInApi>
	): Promise<PageInApi<QuizQuestionInApi>> {
		const response = await fetch(
			`${this.quizApiBaseUrl}/quizzes/${quizId}/questions?skip=${pagingOptions.skip}&take=${pagingOptions.take}`
		);
		const quizQuestionsPage = await response.json();
		return quizQuestionsPage;
	}

	async fetchQuizQuestionById(
		targetQuizId: string,
		targetQuizQuestionId: string
	): Promise<QuizQuestionInApi> {
		const response = await fetch(
			`${this.quizApiBaseUrl}/quizzes/${targetQuizId}/questions/${targetQuizQuestionId}`
		);
		const quizQuestion = await response.json();
		return quizQuestion;
	}

	async fetchQuizQuestionAnswerById(
		targetQuizId: string,
		targetQuizQuestionId: string,
		targetQuestionAnswerId: string
	): Promise<QuizQuestionAnswerInApi> {
		const response = await fetch(
			`${this.quizApiBaseUrl}/quizzes/${targetQuizId}/questions/${targetQuizQuestionId}/answers/${targetQuestionAnswerId}`
		);
		const quizQuestionAnswer = await response.json();
		return quizQuestionAnswer;
	}

	async fetchQuizQuestionAnswers(
		targetQuizId: string,
		targetQuizQuestionId: string
	): Promise<QuizQuestionAnswerInApi[]> {
		const response = await fetch(
			`${this.quizApiBaseUrl}/quizzes/${targetQuizId}/questions/${targetQuizQuestionId}/answers`
		);
		const quizQuestionAnswers = await response.json();
		return quizQuestionAnswers;
	}
}
