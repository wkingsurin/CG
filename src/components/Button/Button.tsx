import "./Button.scss";
import React from "react";

type Props = {
	difficulty?: number;
	animate?: boolean;
	className?: string;
	name?: string;
	children: string;
	onClick?: (e: React.MouseEvent) => void;
};

export default function Button({
	difficulty,
	children,
	animate,
	name,
	onClick,
}: Props) {
	const isActive =
		difficulty !== undefined && `${difficulty}` === name ? "active" : "";

	return (
		<button
			className={`btn ${isActive}`}
			name={name}
			onClick={(e: React.MouseEvent) => onClick?.(e)}
		>
			{children}
			{animate && <div></div>}
		</button>
	);
}
