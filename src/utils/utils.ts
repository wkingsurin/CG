export const doubleArray = (array: string[]): string[] => {
	return [...array, ...array];
};

export const shuffle = <T>(array: T[]): T[] => {
	const arrayCopy = array.slice();
	let currentIndex = array.length;
	let randomIndex

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
			arrayCopy[randomIndex],
			arrayCopy[currentIndex],
		];
	}

	return arrayCopy;
};