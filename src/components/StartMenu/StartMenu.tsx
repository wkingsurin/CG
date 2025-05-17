import './StartMenu.scss'

export default function StartMenu() {
	return (
		<div className="start-menu">
			<button className="btn">New Game</button>
			<div className="difficulty-panel">
				<button className="btn">3x5</button>
				<button className="btn">4x7</button>
				<button className="btn">5x9</button>
			</div>
		</div>
	);
}
