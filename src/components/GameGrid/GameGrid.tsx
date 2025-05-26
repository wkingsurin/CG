import "./GameGrid.scss";
import Card from "../Card";
import { SMILES } from "../../constants/smiles";

export default function GameGrid() {
	const cards = SMILES.map((smile, index) => {
		return (
			<Card key={index} animate>
				{smile}
			</Card>
		);
	});

	return (
		<div className="grid">
			<div className="game-grid">{cards}</div>
		</div>
	);
}
