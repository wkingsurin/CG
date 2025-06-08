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
	const [start, setStart] = useState(false);
	const [grid, setGrid] = useState(
		createGrid(emoji, doubleArray, shuffle, level)
	);
	const [openConfirm, setOpenConfirm] = useState(false);

	const openModalConfirm = (): void => {
		setOpenConfirm(() => true);
	};

	const closeModalConfirm = (): void => {
		setOpenConfirm(() => false);
	};

	const handleChangeLevel = (e: React.MouseEvent, modal: boolean) => {
		const { name } = e.target as HTMLButtonElement;
		if (!name || (Number(name) === level && !modal)) {
			return;
		}

		if (!start) {
			setLevel(() => Number(name));
			handleConfirm(Number(name));
			return;
		}

		setLevel(() => Number(name));
		openModalConfirm();
	};

	const handleNewGame = (): void => {
		openModalConfirm();
	};

	const handleBack = (): void => {
		closeModalConfirm();
	};

	const handleConfirm = (level?: React.MouseEvent | number): void => {
		if (typeof level !== "number") return;
		setGrid(() => createGrid(emoji, doubleArray, shuffle, level));
		closeModalConfirm();
	};

	const isFilledGrid =
		grid.filter((c) => c.status === "completed").length === grid.length;

	return (
		<div className="app">
			<StartMenu
				prevLevel={grid.length}
				handleChangeLevel={(e: React.MouseEvent) => handleChangeLevel(e, false)}
				handleNewGame={handleNewGame}
			></StartMenu>
			<div className="bound"></div>
			<GameGrid
				start={start}
				setStart={setStart}
				grid={grid}
				setGrid={setGrid}
			></GameGrid>
			<Overlay open={openConfirm}>
				<ModalConfirm
					level={level}
					handleBack={handleBack}
					handleConfirm={handleConfirm}
				></ModalConfirm>
			</Overlay>
			<Overlay open={isFilledGrid}>
				<Modal handleChangeLevel={handleChangeLevel}></Modal>
			</Overlay>
		</div>
	);
}
