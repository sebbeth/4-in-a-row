import React from 'react';
import { GameState } from "../models/GameState";
import './Board.css';
import { Cell } from './Cell';
import { ColumnButton } from './ColumnButton';


interface IBoardState {
	gameState: GameState;
	player: number;
}

interface IBoardProps {

}

export class Board extends React.Component<IBoardProps, IBoardState> {

	constructor(props: IBoardProps, state: IBoardState) {
		super(props);
		this.state = {
			gameState: new GameState(8, 8),
			player: 1
		};
	}



	render() {

		const columnCount = 8;
		const rowCount = 8;
		const columns = new Array(columnCount).fill(columnCount);
		const rows = new Array(rowCount).fill(rowCount);

		if (this.state.gameState.gameover === true) {
			return (
				<div className="board">
					<h1>{this.state.player === 1 ? "Player One Won!" : "Player Two Won!"} </h1>
					<h2><a href="/">Play again</a></h2>

				</div>
			);
		} else {
			return (
				<div className="board">
					<h1>4 In a Row</h1>
					<h2>{this.state.player === 1 ? "Player One" : "Player Two"}</h2>
					<table className="board-table">
						<tbody>
							{rows.map((e, i) => {
								return (<tr className="row">
									{columns.map((e, j) => { return (<Cell row={i} column={j} player={this.getPlayerForCell(j, i)}></Cell>); })}
								</tr>);
							})}
							<tr>{columns.map((element, index) => { return (<th><ColumnButton id={index} clicked={(id) => this.buttonClicked(id)} /></th>); })}</tr>
						</tbody>
					</table>
				</div>
			);
		}


	}

	private getPlayerForCell(row: number, column: number): number {
		let x = this.state.gameState.boardMatrix[row][column];
		return x;
	}
	private buttonClicked(id: number) {
		let gameState = this.state.gameState;
		gameState.dropChip(id, this.state.player);

		let player = this.state.player;
		if (player === 1) {
			player = 2;
		} else {
			player = 1;
		}
		this.setState({ gameState, player });
	}

	renderColumns() {
		return (<span>COLS</span>);
	}
}