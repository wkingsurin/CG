import "./DifficultyPanel.scss";
import Button from "../Button";
import type { MouseEventHandler } from "react";

type DifficultyProps = {
	difficulty?: string;
	handleChangeLevel: MouseEventHandler;
};

export default function DifficultyPanel({
	difficulty,
	handleChangeLevel,
}: DifficultyProps) {
	return (
		<div className="difficulty-panel" onClick={handleChangeLevel}>
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
