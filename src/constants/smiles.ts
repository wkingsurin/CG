import { shuffle, doubleArray } from "../utils/utils";

export const emoji: string[] = [
	"😁",
	"😂",
	"😃",
	"😄",
	"😅",
	"😆",
	"😇",
	"😈",
	"😉",
	"😊",
	"😋",
	"😌",
	"😍",
	"😎",
	"😏",
	"😐",
	"😒",
	"😓",
	"😘",
	"😚",
];

export const SMILES: Record<string, string[]> = {
	LVL1: shuffle(doubleArray(emoji.slice(0, 9))),
	LVL2: shuffle(doubleArray(emoji.slice(0, 14))),
	LVL3: shuffle(doubleArray(emoji)),
};
