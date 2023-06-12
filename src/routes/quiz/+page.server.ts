import type {DeepReadonly} from "ts-essentials";
import type {PageServerLoad} from "./$types.js";
import type {Quiz} from "$lib/features/quiz/types/Quiz.js";

export const load: PageServerLoad = async () => {
	const [{quizzesService}, {appConfig}] = await Promise.all([
		import("$lib/server/instances/quizzesService.js"),
		import("$lib/server/app_config/appConfig.js"),
	]);
	const quiz: DeepReadonly<Quiz> = await quizzesService.getQuizById(appConfig.QUIZ_ID);

	return {
		quiz,
	} as const;
};
