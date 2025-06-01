import "./Card.scss";
import { type MouseEventHandler } from "react";

type Props = {
	grid: { emoji: string; status: string; id: number }[];
	setGrid: React.Dispatch<
		React.SetStateAction<{ emoji: string; status: string; id: number }[]>
	>;
	card: { emoji: string; status: string; id: number };
	animate?: boolean;
};

export default function Card({ card, animate }: Props) {
	const onClick: MouseEventHandler = (e) => {
		console.log(e.target);
	};

	return (
		<div className="card" onClick={onClick}>
			{animate && <div className="border"></div>}
			<div className="content">{card.status !== "closed" && card.emoji}</div>
		</div>
	);
}
