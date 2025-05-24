import "./Overlay.scss";
import React from "react";

type Props = {
	children: React.ReactNode;
	show?: boolean;
};

export default function Overlay({ children }: Props) {
	return <div className="overlay">{children}</div>;
}
