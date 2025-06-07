import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import React from "react";

type StartMenuProps = {
	level: number;
	handleChangeLevel: (e: React.MouseEvent, modal: boolean) => void;
	handleNewGame: (e: React.MouseEvent) => void;
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
				handleChangeLevel={handleChangeLevel}
				modal={false}
			></DifficultyPanel>
		</div>
	);
}
