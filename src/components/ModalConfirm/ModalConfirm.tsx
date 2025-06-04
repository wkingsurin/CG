import "./ModalConfirm.scss";
import Button from "../Button";

interface IModalConfirm {
	handleBack: () => void;
	handleNewGame: () => void;
}

export default function ModalConfirm({
	handleBack,
	handleNewGame,
}: IModalConfirm) {
	return (
		<div className="confirm">
			<h2 className="title">Are you sure?</h2>
			<div className="controls">
				<Button onClick={handleBack}>Back</Button>
				<Button onClick={handleNewGame}>New Game</Button>
			</div>
		</div>
	);
}
