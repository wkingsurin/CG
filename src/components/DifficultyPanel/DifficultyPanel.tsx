import "./DifficultyPanel.scss";
import Button from "../Button";

type Props = {
	activeBtn?: string;
};

export default function DifficultyPanel({ activeBtn }: Props) {
	return (
		<div className="difficulty-panel">
			<Button isActive={activeBtn} animate name="3x5">
				3x5
			</Button>
			<Button isActive={activeBtn} animate name="4x7">
				4x7
			</Button>
			<Button isActive={activeBtn} animate name="5x9">
				5x9
			</Button>
		</div>
	);
}
