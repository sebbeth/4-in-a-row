import React from 'react';


export class ColumnButton extends React.Component {


    click() {
        console.log("Click");
    }

    render() {
      return (<button onClick={this.click}>Go</button>);
    }
}