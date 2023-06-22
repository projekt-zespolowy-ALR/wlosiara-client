import type {DeepReadonly} from "ts-essentials";
import type {Quiz} from "$lib/features/quiz/types/Quiz.js";

export const load = async ({parent}) => {
	const [{quizzesService}, {appConfig}, {currentUser}] = await Promise.all([
		import("$lib/server/instances/quizzesService.js"),
		import("$lib/server/app_config/appConfig.js"),
		parent(),
	]);
	const quiz: DeepReadonly<Quiz> = await quizzesService.getQuizById(appConfig.QUIZ_ID);

	return {
		quiz,
		currentUser,
	} as const;
};
