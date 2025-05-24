import Button from "../Button";
import DifficultyPanel from "../DifficultyPanel";
import "./Modal.scss";

type Props = {
	value: number;
};

export default function Modal({ value }: Props) {
	return (
		<div className="modal">
			<h3 className="title">Win</h3>
			<div className="line"></div>
			<div className="content">
				<p>Attempts:</p>
				<p className="value">{value}</p>
			</div>
			<div className="line"></div>
			<DifficultyPanel activeBtn={"none"}></DifficultyPanel>
			<Button className="close" isActive="none">
				x
			</Button>
		</div>
	);
}
