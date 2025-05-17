import "./StartMenu.scss";
import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";

export default function StartMenu() {
	return (
		<div className="start-menu">
			<Button>New Game</Button>
			<DifficultyPanel></DifficultyPanel>
		</div>
	);
}
