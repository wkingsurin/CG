import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";
import Modal from "../Modal";
import Overlay from "../Overlay/Overlay";

export default function App() {
	return (
		<div className="app">
			<StartMenu></StartMenu>
			<GameGrid></GameGrid>
			<Overlay>
				<Modal value={23}></Modal>
			</Overlay>
		</div>
	);
}
