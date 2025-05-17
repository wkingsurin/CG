import "./Card.scss";

type Props = {
	children: string;
};

export default function Card({ children }: Props) {
	return <div className="card">{children}</div>;
}
