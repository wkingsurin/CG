import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";

export default function StartMenu() {
	return (
		<div className="start-menu">
			<Button animate isActive="none">
				New Game
			</Button>
			<DifficultyPanel></DifficultyPanel>
		</div>
	);
}
