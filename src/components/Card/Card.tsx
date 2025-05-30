import "./Card.scss";
import { useEffect, useState, type MouseEventHandler } from "react";

type Props = {
	children: string;
	animate?: boolean;
};

export default function Card({ animate, children }: Props) {
	const [card, setCard] = useState({ status: "closed", emoji: "" });

	const onClick: MouseEventHandler = () => {
		setCard(() => ({ status: "waiting", emoji: children }));
	};

	useEffect(() => {
		setCard((c) => ({ ...c, status: "closed" }));
	}, [children]);

	return (
		<div className="card" onClick={onClick}>
			{animate && <div className="border"></div>}
			<div className="content">{card.status !== "closed" && card.emoji}</div>
		</div>
	);
}
