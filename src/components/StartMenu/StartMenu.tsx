import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import type { MouseEventHandler } from "react";

type StartMenuProps = {
	level: number;
	handleChangeLevel: MouseEventHandler;
};

export default function StartMenu({
	level,
	handleChangeLevel,
}: StartMenuProps) {
	return (
		<div className="start-menu">
			<Button animate>New Game</Button>
			<DifficultyPanel
				difficulty={`${level}`}
				handleChangeLevel={handleChangeLevel}
			></DifficultyPanel>
		</div>
	);
}
