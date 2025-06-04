import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import type { MouseEvent } from "react";

type StartMenuProps = {
	level: number;
	handleChangeLevel: (e: MouseEvent, modal: boolean) => void;
	handleNewGame: () => void;
};

export default function StartMenu({
	level,
	handleChangeLevel,
	handleNewGame,
}: StartMenuProps) {
	return (
		<div className="start-menu">
			<Button animate onClick={handleNewGame}>
				New Game
			</Button>
			<DifficultyPanel
				difficulty={level}
				handleChangeLevel={(e: MouseEvent) => handleChangeLevel(e, false)}
			></DifficultyPanel>
		</div>
	);
}
