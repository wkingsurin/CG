import "./StartMenu.scss";
import Button from "../Button";

export default function StartMenu() {
	return (
		<div className="start-menu">
			<Button>New Game</Button>
			<div className="difficulty-panel">
				<Button>3x5</Button>
				<Button>4x7</Button>
				<Button>5x9</Button>
			</div>
		</div>
	);
}
