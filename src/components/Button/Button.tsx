import "./Button.scss";

type Props = {
	isActive?: boolean;
	children: string;
};

export default function Button({ isActive, children }: Props) {
	return (
		<button className={`btn ${isActive ? "active" : ""}`}>{children}</button>
	);
}
