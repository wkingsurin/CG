import "./GameGrid.scss";
import Card from "../Card";
import { emoji, createGrid } from "../../constants/smiles";
import { shuffle, doubleArray } from "../../utils/utils";

type GridProps = {
	level: number;
};

export default function GameGrid({ level = 1 }: GridProps) {
	const grid = createGrid(emoji, doubleArray, shuffle, level);
	const gridColumns: number = level === 1 ? 6 : level === 2 ? 7 : 8;

	const cards = grid.map((smile) => {
		return (
			<Card key={smile.id} animate>
				{smile.emoji}
			</Card>
		);
	});

	return (
		<div className="grid">
			<div
				className="game-grid"
				style={{
					gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
				}}
			>
				{cards}
			</div>
		</div>
	);
}
