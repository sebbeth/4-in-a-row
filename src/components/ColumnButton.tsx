import React from 'react';

interface ColumnButtonProps {
	id: number;
	clicked(id: number): void;
}

export default class ColumnButton extends React.Component<ColumnButtonProps> {
	private click() {
		this.props.clicked(this.props.id);
	}

	render() {
		return (<button onClick={(e) => this.click()}>Go</button>);
	}
}