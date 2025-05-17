import "./App.css";
import StartMenu from "../StartMenu";
import GameGrid from "../GameGrid";

export default function App() {
	return (
		<div className="app">
			<StartMenu></StartMenu>
			<GameGrid></GameGrid>
		</div>
	);
}
