import "./Button.scss";

type Props = {
	isActive?: string;
	animate?: boolean;
	className?: string;
	name?: string;
	children: string;
};

export default function Button({
	isActive,
	children,
	animate,
	className,
	name,
}: Props) {
	return (
		<button
			className={`btn ${className} ${isActive === name ? "active" : ""}`}
			name={name}
		>
			{children}
			{animate && <div></div>}
		</button>
	);
}
