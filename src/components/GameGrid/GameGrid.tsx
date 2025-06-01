import "./GameGrid.scss";
import Card from "../Card";
import type React from "react";

type GridProps = {
	grid: { emoji: string; status: string; id: number }[];
	setGrid: React.Dispatch<
		React.SetStateAction<{ emoji: string; status: string; id: number }[]>
	>;
};

export default function GameGrid({ grid, setGrid }: GridProps) {
	const gridColumns: number =
		grid.length === 18 ? 6 : grid.length === 28 ? 7 : 8;

	const cards = grid.map((smile) => {
		return (
			<Card
				key={smile.id}
				grid={grid}
				setGrid={setGrid}
				card={smile}
				animate
			></Card>
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
