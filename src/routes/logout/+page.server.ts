import type {DeepReadonly} from "ts-essentials";
import type {Actions} from "./$types.js";

export const actions: DeepReadonly<Actions> = {
    default: async (event) => {
        event.cookies.delete('session_token');
    }
} as const;
