import "./DifficultyPanel.scss";
import Button from "../Button";

type Props = {
	difficulty?: string;
};

export default function DifficultyPanel({ difficulty }: Props) {
	return (
		<div className="difficulty-panel">
			<Button difficulty={difficulty} animate name="3x6">
				3x6
			</Button>
			<Button difficulty={difficulty} animate name="4x7">
				4x7
			</Button>
			<Button difficulty={difficulty} animate name="5x8">
				5x8
			</Button>
		</div>
	);
}
