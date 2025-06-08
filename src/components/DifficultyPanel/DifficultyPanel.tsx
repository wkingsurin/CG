import "./DifficultyPanel.scss";
import Button from "../Button";
import React from "react";

type DifficultyProps = {
	prevLevel?: number;
	modal: boolean;
	handleChangeLevel: (e: React.MouseEvent, modal: boolean) => void;
};

export default function DifficultyPanel({
	prevLevel,
	handleChangeLevel,
	modal = false,
}: DifficultyProps) {
	return (
		<div
			className="difficulty-panel"
			onClick={(e: React.MouseEvent) => handleChangeLevel(e, modal)}
		>
			<Button difficulty={prevLevel} animate name="1">
				3x6
			</Button>
			<Button difficulty={prevLevel} animate name="2">
				4x7
			</Button>
			<Button difficulty={prevLevel} animate name="3">
				5x8
			</Button>
		</div>
	);
}
