import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import React from "react";

type StartMenuProps = {
	prevLevel: number;
	handleChangeLevel: (e: React.MouseEvent, modal: boolean) => void;
	handleNewGame: () => void;
};

export default function StartMenu({
	prevLevel,
	handleChangeLevel,
	handleNewGame,
}: StartMenuProps) {
	return (
		<div className="start-menu">
			<Button animate onClick={handleNewGame}>
				New Game
			</Button>
			<DifficultyPanel
				prevLevel={prevLevel}
				handleChangeLevel={handleChangeLevel}
				modal={false}
			></DifficultyPanel>
		</div>
	);
}
