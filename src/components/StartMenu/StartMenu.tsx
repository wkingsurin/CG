import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";

export default function StartMenu() {
	return (
		<div className="start-menu">
			<Button animate>
				New Game
			</Button>
			<DifficultyPanel difficulty="5x8"></DifficultyPanel>
		</div>
	);
}
