import "./Button.scss";

type Props = {
	difficulty?: string;
	animate?: boolean;
	className?: string;
	name?: string;
	children: string;
	onClick?: () => void;
};

export default function Button({
	difficulty,
	children,
	animate,
	name,
	onClick,
}: Props) {
	const isActive =
		difficulty !== undefined && difficulty === name ? "active" : "";

	return (
		<button className={`btn ${isActive}`} name={name} onClick={onClick}>
			{children}
			{animate && <div></div>}
		</button>
	);
}
