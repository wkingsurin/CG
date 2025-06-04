import "./DifficultyPanel.scss";
import Button from "../Button";
import type { MouseEvent } from "react";

type DifficultyProps = {
	difficulty?: number;
	modal?: boolean;
	handleChangeLevel: (e: MouseEvent, modal: boolean) => void;
};

export default function DifficultyPanel({
	difficulty,
	handleChangeLevel,
	modal = false,
}: DifficultyProps) {
	return (
		<div
			className="difficulty-panel"
			onClick={(e: MouseEvent) => handleChangeLevel(e, modal)}
		>
			<Button difficulty={difficulty} animate name="1">
				3x6
			</Button>
			<Button difficulty={difficulty} animate name="2">
				4x7
			</Button>
			<Button difficulty={difficulty} animate name="3">
				5x8
			</Button>
		</div>
	);
}
