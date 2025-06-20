import "./Card.scss";
import { type MouseEventHandler } from "react";

type Props = {
	start: boolean;
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
	grid: { emoji: string; status: string; id: number }[];
	setGrid: React.Dispatch<
		React.SetStateAction<{ emoji: string; status: string; id: number }[]>
	>;
	card: { emoji: string; status: string; id: number };
	animate?: boolean;
	className: string;
	ref: React.Ref<HTMLDivElement>;
};

export default function Card({
	start,
	setStart,
	grid,
	setGrid,
	card,
	animate,
	className,
	ref,
}: Props) {
	const onClick: MouseEventHandler = () => {
		const compare = grid.filter((c) => c.status === "waiting");

		if (card.status === "completed") {
			console.log("Карточки совпадают");
			return;
		}

		if (card.status === "waiting") {
			console.log(`Закрыть карточку`);
			setGrid((g) => {
				return g.map((c) =>
					c.id === card.id ? { ...c, status: "closed" } : c
				);
			});
			return;
		}

		if (card.status === "closed" && compare.length < 2) {
			console.log(`Открыть карточку`);
			if (!start) {
				setStart(() => true);
			}
			setGrid((g) =>
				g.map((c) => {
					return c.id === card.id ? { ...c, status: "waiting" } : c;
				})
			);

			if (compare.length === 1 && compare[0].emoji !== card.emoji) {
				console.log(`Закрыть карточки`);
				setTimeout(() => {
					setGrid((g) =>
						g.map((c) => {
							return (c.emoji === card.emoji && c.status === "completed") ||
								c.status === "completed"
								? { ...c, status: "completed" }
								: { ...c, status: "closed" };
						})
					);
				}, 1500);
			}
			if (compare.length === 1 && compare[0].emoji === card.emoji) {
				console.log(`Фиксируем карточки в статусе: 'completed'`);
				setGrid((g) => {
					return g.map((c) => {
						return c.emoji === card.emoji || c.status === "completed"
							? { ...c, status: "completed" }
							: { ...c, status: "closed" };
					});
				});
			}
		}
	};

	const isCompleted = card.status === "completed";

	return (
		<div
			className={`card ${className} ${card.status}`}
			onClick={onClick}
			style={{ cursor: isCompleted ? "default" : "pointer" }}
			ref={ref}
		>
			{animate && (
				<div
					className="border"
					style={{
						background: isCompleted ? "transparent" : "",
					}}
				></div>
			)}
			<div
				className="content"
				style={{ background: isCompleted ? "#1f1f24" : "" }}
			>
				{card.status !== "closed" && card.emoji}
			</div>
		</div>
	);
}
