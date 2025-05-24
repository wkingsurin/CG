import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";
import Modal from "../Modal";
import Overlay from "../Overlay/Overlay";

import { useState } from "react";

export default function App() {
	const [open, setOpen] = useState(false);

	const handleClose = (): void => {
		setOpen(() => false);
	};

	return (
		<div className="app">
			<StartMenu></StartMenu>
			<GameGrid></GameGrid>
			<Overlay open={open}>
				<Modal value={23} onClick={handleClose}></Modal>
			</Overlay>
		</div>
	);
}
