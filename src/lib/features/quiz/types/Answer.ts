import type HairType from "./HairType.js";

type Answer = Readonly<{
	text: string;
	type: HairType;
}>;

export default Answer;
