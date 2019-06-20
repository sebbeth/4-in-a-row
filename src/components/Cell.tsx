import React from 'react';
import './Cell.css';

interface CellState {
}

interface CellProps {
	row: number;
	column: number;
	player: number;
}

export class Cell extends React.Component<CellProps, CellState> {

	constructor(props: CellProps, state: CellState) {
		super(props, state);
		this.state = {
		}
		// console.log(this.props.row + ":" + this.props.column);

	}

	render() {
		console.log("***" + this.props.player);

		let cellClass = 'empty';
		switch (this.props.player) {
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
		return (<td className={cellClass}></td>);
	}
}