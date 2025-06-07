import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";
import Modal from "../Modal";
import Overlay from "../Overlay/Overlay";
import ModalConfirm from "../ModalConfirm";

import React, { useState } from "react";
import { doubleArray, shuffle } from "../../utils/utils";
import { emoji, createGrid } from "../../constants/smiles";

export default function App() {
	const [level, setLevel] = useState(1);
	const [grid, setGrid] = useState(
		createGrid(emoji, doubleArray, shuffle, level)
	);
	const [openConfirm, setOpenConfirm] = useState(false);

	const handleChangeLevel = (e: React.MouseEvent, modal: boolean) => {
		const { name } = e.target as HTMLButtonElement;
		if (!name || (Number(name) === level && !modal)) {
			return;
		}

		handleNewGame(e);
	};

	const handleNewGame = (e: React.MouseEvent): void => {
		const { name } = e.target as HTMLButtonElement;
		if (!openConfirm) {
			setOpenConfirm(() => true);
			return;
		}

		setGrid((g) => shuffle(g.map((c) => ({ ...c, status: "closed" }))));
		setLevel(() => Number(name));
		setOpenConfirm(() => false);
	};

	const handleBack = (): void => {
		setOpenConfirm(() => false);
	};

	const isFilledGrid =
		grid.filter((c) => c.status === "completed").length === grid.length;

	return (
		<div className="app">
			<StartMenu
				level={level}
				handleChangeLevel={(e: React.MouseEvent) => handleChangeLevel(e, false)}
				handleNewGame={handleNewGame}
			></StartMenu>
			<div className="bound"></div>
			<GameGrid grid={grid} setGrid={setGrid}></GameGrid>
			<Overlay open={openConfirm}>
				<ModalConfirm
					handleBack={handleBack}
					handleNewGame={handleNewGame}
				></ModalConfirm>
			</Overlay>
			<Overlay open={isFilledGrid}>
				<Modal handleChangeLevel={handleChangeLevel}></Modal>
			</Overlay>
		</div>
	);
}
