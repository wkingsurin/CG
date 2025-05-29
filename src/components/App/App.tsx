import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";
import Modal from "../Modal";
import Overlay from "../Overlay/Overlay";

import { useState, type MouseEventHandler } from "react";

export default function App() {
	const [level, setLevel] = useState(1);
	const [open, setOpen] = useState(false);

	const handleClose = (): void => {
		setOpen(() => false);
	};

	const handleChangeLevel: MouseEventHandler = (e) => {
		const target = e.target as HTMLButtonElement;
		if (!target.name) return;

		setLevel(() => Number(target.name));
	};

	return (
		<div className="app">
			<StartMenu
				level={level}
				handleChangeLevel={handleChangeLevel}
			></StartMenu>
			<div className="bound"></div>
			<GameGrid level={level}></GameGrid>
			<Overlay open={open}>
				<Modal value={23} onClick={handleClose}></Modal>
			</Overlay>
		</div>
	);
}
