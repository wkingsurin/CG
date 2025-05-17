import "./DifficultyPanel.scss";
import Button from "../Button";

export default function DifficultyPanel() {
	return (
		<div className="difficulty-panel">
			<Button>3x5</Button>
			<Button>4x7</Button>
			<Button>5x9</Button>
		</div>
	);
}
