import React from 'react';
import './Cell.css';

export interface CellState {
}

export interface CellProps {
	row: number;
	column: number;
	player: number;
	colours: string[];
}

export default class Cell extends React.Component<CellProps, CellState> {
	constructor(props: CellProps, state: CellState) {
		super(props);
		this.state = {
		}
	}

	public render() {
		const { player, colours } = this.props;
		let cellClass = 'empty';
		switch (player) {
			case 1:
				cellClass = 'p1';
				break;
			case 2:
				cellClass = 'p2';
				break;
			case 3:
				cellClass = 'p3';
				break;
		}
		return (
			<td
				className={cellClass}
				style={{
					backgroundColor: colours[player]
				}}
			/>
		);
	}
}