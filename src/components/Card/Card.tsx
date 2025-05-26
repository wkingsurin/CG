import "./Card.scss";
import { useState, type MouseEventHandler } from "react";

type Props = {
	children: string;
	animate?: boolean;
};

const CARD = {
	status: "closed",
};

export default function Card({ animate, children }: Props) {
	const [card, setCard] = useState({ ...CARD, image: children });

	const onClick: MouseEventHandler = () => {
		setCard(() => ({ ...card, status: "waiting" }));
	};

	return (
		<div className="card" onClick={onClick}>
			{animate && <div className="border"></div>}
			<div className="content">{card.status !== "closed" && card.image}</div>
		</div>
	);
}
