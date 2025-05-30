import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import type { MouseEventHandler } from "react";

type StartMenuProps = {
	level: number;
	handleChangeLevel: MouseEventHandler;
	handleNewGame: () => void;
};

export default function StartMenu({
	level,
	handleChangeLevel,
	handleNewGame
}: StartMenuProps) {
	return (
		<div className="start-menu">
			<Button animate onClick={handleNewGame}>New Game</Button>
			<DifficultyPanel
				difficulty={`${level}`}
				handleChangeLevel={handleChangeLevel}
			></DifficultyPanel>
		</div>
	);
}
