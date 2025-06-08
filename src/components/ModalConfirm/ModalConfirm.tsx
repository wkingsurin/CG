import "./ModalConfirm.scss";
import Button from "../Button";
import React from "react";

interface IModalConfirm {
	level: number;
	handleBack: () => void;
	handleConfirm: (e?: React.MouseEvent | number) => void;
}

export default function ModalConfirm({
	level,
	handleBack,
	handleConfirm,
}: IModalConfirm) {
	return (
		<div className="confirm">
			<h2 className="title">Are you sure?</h2>
			<div className="controls">
				<Button onClick={handleBack}>Back</Button>
				<Button level={level} onClick={handleConfirm}>
					Yes
				</Button>
			</div>
		</div>
	);
}
