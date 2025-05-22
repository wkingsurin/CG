import "./Button.scss";

type Props = {
	isActive?: boolean;
	animate?: boolean;
	children: string;
};

export default function Button({ isActive, children, animate }: Props) {
	return (
		<button className={`btn ${isActive ? "active" : ""}`}>
			{children}
			{animate && <div></div>}
		</button>
	);
}
