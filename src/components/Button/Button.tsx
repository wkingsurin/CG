import "./Button.scss";
import React from "react";

type Props = {
	difficulty?: number;
	animate?: boolean;
	name?: string;
	children: string;
	level?: number;
	onClick?: (e: React.MouseEvent | number) => void;
};

export default function Button({
	difficulty,
	children,
	animate,
	name,
	level,
	onClick,
}: Props) {
	const isActive =
		difficulty === 18 && name === "1"
			? "active"
			: difficulty === 28 && name === "2"
			? "active"
			: difficulty === 40 && name === "3"
			? "active"
			: "";

	return (
		<button
			className={`btn ${isActive}`}
			name={name}
			onClick={(e: React.MouseEvent) => onClick?.(level ? level : e)}
		>
			{children}
			{animate && <div></div>}
		</button>
	);
}
