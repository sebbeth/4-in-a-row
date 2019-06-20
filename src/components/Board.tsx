import React from "react";
import { GameState } from "../models/GameState";
import "./Board.css";
import Cell from "./Cell";
import ColumnButton from "./ColumnButton";

export interface IBoardState {
	gameState: GameState;
	player: number;
	colours: string[];
}

export interface IBoardProps {

}

export class Board extends React.Component<IBoardProps, IBoardState> {
	constructor(props: IBoardProps, state: IBoardState) {
		super(props);
		this.state = {
			gameState: new GameState(8, 8),
			player: 1,
			colours: []
		};

	}

	public componentDidMount(): void {
		this.getColours();
	}

	public render() {
		const { gameState, player, colours } = this.state;
		return (
			gameState.gameover
				?
				<div className={"board"}>
					<h1>{player === 1 ? "Player One Won!" : "Player Two Won!"} </h1>
					<h2><a href={"/"}>Play again</a></h2>
				</div>
				:
				<div className={"board"}>
					<h1>4 In a Row</h1>
					<h2>{player === 1 ? "Player One" : "Player Two"}</h2>
					<table className={"board-table"}>
						<tbody>
							{
								gameState.boardMatrix[0].map((e, i) =>
									<tr className={"row"} key={i}>
										{
											gameState.boardMatrix.map((e, j) =>
												<Cell
													key={j}
													row={i}
													column={j}
													player={this.getPlayerForCell(j, i)}
													colours={colours}
												/>
											)
										}
									</tr>
								)
							}
							<tr>
								{
									gameState.boardMatrix[0].map((element, index) =>
										<th key={index}>
											<ColumnButton
												id={index}
												clicked={(id) => this.buttonClicked(id)}
											/>
										</th>
									)
								}
							</tr>
						</tbody>
					</table>
				</div>
		);
	}

	private async getColours() {
		let colours = [];
		for (let index = 0; index < 3; index++) {
			let response = await fetch('https://api.noopschallenge.com/hexbot');
			let json = await response.json();
			colours.push(json.colors[0].value);
		}
		this.setState({ colours: colours }, () => {
			console.log(this.state.colours);
		})

	}
	private getPlayerForCell(row: number, column: number): number {
		let x = this.state.gameState.boardMatrix[row][column];
		return x;
	}
	private buttonClicked(id: number): void {
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
}