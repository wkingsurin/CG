import DifficultyPanel from "../DifficultyPanel";
import type { MouseEvent } from "react";
import "./Modal.scss";

type Props = {
	level?: number;
	onClick?: () => void;
	handleChangeLevel: (e: MouseEvent, modal: boolean) => void;
};

export default function Modal({ handleChangeLevel }: Props) {
	return (
		<div className="modal">
			<p className="icon">👍</p>
			<div className="title-block">
				<h3 className="title">
					Congratulations!
					<br />
					You Win!
				</h3>
			</div>
			<DifficultyPanel
				handleChangeLevel={(e: MouseEvent) => handleChangeLevel(e, true)}
			></DifficultyPanel>
		</div>
	);
}
