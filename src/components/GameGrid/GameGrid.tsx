import "./GameGrid.scss";
import Card from "../Card";
import type React from "react";

import { useRef } from "react";
import { Transition } from "react-transition-group";

type GridProps = {
	start: boolean;
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
	grid: { emoji: string; status: string; id: number }[];
	setGrid: React.Dispatch<
		React.SetStateAction<{ emoji: string; status: string; id: number }[]>
	>;
};

export default function GameGrid({
	start,
	grid,
	setGrid,
	setStart,
}: GridProps) {
	const cardRef = useRef(null);
	const gridColumns: number =
		grid.length === 18 ? 6 : grid.length === 28 ? 7 : 8;

	const cards = grid.map((smile) => {
		return (
			<Transition
				key={smile.id}
				in={smile.status === "waiting"}
				timeout={300}
				classNames="card"
				nodeRef={cardRef}
				appear
			>
				{(state) => {
					return (
						<Card
							grid={grid}
							setGrid={setGrid}
							start={start}
							setStart={setStart}
							card={smile}
							animate
							className={state}
							ref={cardRef}
						></Card>
					);
				}}
			</Transition>
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
