import React from 'react';

interface Props {
    rowCount: number;
}

export class Column extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
      return (<div>Column Row count={this.props.rowCount}</div>);
    }
}