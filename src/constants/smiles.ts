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

export const createGrid = (
	emoji: string[],
	doubleArray: (array: string[]) => string[],
	shuffle: (array: string[]) => string[],
	level: number
): { emoji: string; id: number }[] => {
	const to = level === 1 ? 9 : level === 2 ? 14 : emoji.length;

	return shuffle(doubleArray(emoji.slice(0, to))).map(
		(emoji: string, index: number): { emoji: string; id: number } => {
			return { emoji: emoji, id: index };
		}
	);
};
