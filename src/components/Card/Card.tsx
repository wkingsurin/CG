import "./Card.scss";

type Props = {
	children: string;
	animate?: boolean;
};

export default function Card({ animate, children }: Props) {
	return (
		<div className="card">
			{children}
			{animate && <div></div>}
		</div>
	);
}
