import "./Card.scss";

type Props = {
	children: string;
	animate?: boolean;
};

export default function Card({ animate, children }: Props) {
	return (
		<div className="card">
			{animate && <div className="border">{children}</div>}
			<div className="content"></div>
		</div>
	);
}
