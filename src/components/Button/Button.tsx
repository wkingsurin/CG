import "./Button.scss";

type Props = {
	children: string;
};

export default function Button({ children }: Props) {
	return <button className="btn">{children}</button>;
}
