import "./GameGrid.scss";
import Card from "../Card";
import { SMILES } from "../../constants/smiles";

type GridProps = {
	level: number;
};

export default function GameGrid({ level = 1 }: GridProps) {
	const DOUBLE_SMILES = SMILES[`LVL${level}`];
	const gridColumns: number = level === 1 ? 6 : level === 2 ? 7 : 8;

	const cards = DOUBLE_SMILES.map((smile, index) => {
		return (
			<Card key={index} animate>
				{smile}
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
