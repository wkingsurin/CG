import "./DifficultyPanel.scss";
import Button from "../Button";

export default function DifficultyPanel() {
	return (
		<div className="difficulty-panel">
			<Button isActive={false}>3x5</Button>
			<Button isActive={false}>4x7</Button>
			<Button isActive>5x9</Button>
		</div>
	);
}
