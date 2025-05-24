import "./Overlay.scss";
import React from "react";

type Props = {
	children: React.ReactNode;
	show?: boolean;
	open: boolean;
};

export default function Overlay({ children, open }: Props) {
	return (
		<div className="overlay" style={{ display: open ? "" : "none" }}>
			{children}
		</div>
	);
}
