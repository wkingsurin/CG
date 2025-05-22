import "./DifficultyPanel.scss";
import Button from "../Button";

export default function DifficultyPanel() {
	return (
		<div className="difficulty-panel">
			<Button isActive={false} animate>
				3x5
			</Button>
			<Button isActive={false} animate>
				4x7
			</Button>
			<Button isActive animate>
				5x9
			</Button>
		</div>
	);
}
