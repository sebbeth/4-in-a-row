import React from 'react';

interface ColumnButtonProps {
	id: number;
	clicked(id: number): void;
}

export class ColumnButton extends React.Component<ColumnButtonProps> {

	constructor(props: ColumnButtonProps) {
		super(props);
	}

	private click() {
		this.props.clicked(this.props.id);
	}

	render() {
		const { id } = this.props;
		return (<button onClick={(e) => this.click()}>Go</button>);
	}
}