import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";
import Modal from "../Modal";
import Overlay from "../Overlay/Overlay";
import ModalConfirm from "../ModalConfirm";

import { useState, type MouseEventHandler } from "react";
import { doubleArray, shuffle } from "../../utils/utils";
import { emoji, createGrid } from "../../constants/smiles";

export default function App() {
	const [level, setLevel] = useState(1);
	const [grid, setGrid] = useState(
		createGrid(emoji, doubleArray, shuffle, level)
	);
	const [openConfirm, setOpenConfirm] = useState(false);

	const handleClose = (): void => {
		// setOpen(() => false);
	};

	const handleChangeLevel: MouseEventHandler = (e) => {
		const target = e.target as HTMLButtonElement;
		if (!target.name) return;

		setLevel(() => Number(target.name));

		if (Number(target.name) === level) {
			return;
		}
		setGrid(() => createGrid(emoji, doubleArray, shuffle, Number(target.name)));
	};

	const handleNewGame = (): void => {
		if (!openConfirm) {
			setOpenConfirm(() => true);
			return;
		}

		setGrid((g) => shuffle(g.map((c) => ({ ...c, status: "closed" }))));
		setOpenConfirm((oc) => !oc);
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
				handleChangeLevel={handleChangeLevel}
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
				<Modal value={23} onClick={handleClose}></Modal>
			</Overlay>
		</div>
	);
}
