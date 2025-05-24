import "./Button.scss";

type Props = {
	isActive?: string;
	animate?: boolean;
	className?: string;
	name?: string;
	children: string;
	onClick?: () => void;
};

export default function Button({
	isActive,
	children,
	animate,
	className,
	name,
	onClick,
}: Props) {
	return (
		<button
			className={`btn ${className} ${isActive === name ? "active" : ""}`}
			name={name}
			onClick={onClick}
		>
			{children}
			{animate && <div></div>}
		</button>
	);
}
