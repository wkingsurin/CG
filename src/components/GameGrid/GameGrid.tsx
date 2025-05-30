import "./GameGrid.scss";
import Card from "../Card";

type GridProps = {
	grid: {emoji: string, id: number}[];
};

export default function GameGrid({ grid }: GridProps) {
	const gridColumns: number = grid.length === 18 ? 6 : grid.length === 28 ? 7 : 8;

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
