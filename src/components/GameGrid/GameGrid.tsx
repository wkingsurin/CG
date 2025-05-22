import "./GameGrid.scss";
import Card from "../Card";

export default function GameGrid() {
	const length = [
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty",
	];

	const cards = length.map((elem, index) => {
		return (
			<Card key={index} animate>
				{elem}
			</Card>
		);
	});

	return <div className="game-grid">{cards}</div>;
}
