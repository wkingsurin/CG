import "./ModalConfirm.scss";
import Button from "../Button";
import React from "react";

interface IModalConfirm {
	handleBack: () => void;
	handleNewGame: (e: React.MouseEvent) => void;
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
				<Button onClick={handleNewGame}>Yes</Button>
			</div>
		</div>
	);
}
