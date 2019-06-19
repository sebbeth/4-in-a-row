import React from 'react';
import './Board.css';
import {Column} from './Column';
import { ColumnButton } from './ColumnButton';


export class Board extends React.Component {
    render() {

    const columns = new Array(4).fill(4);
    const rows = new Array(6).fill(6);
    console.log(columns);

    return (
        <div className="board">
        <h1>--Board--</h1>
        {/* <div>
        { columns.map((column) => {
            return (<Column rowCount={rowCount}/>);
        }
        )}
        </div> */}
        <table className="board-table">  
            { rows.map(() => {return (<tr className="row">
                { columns.map(() => {return (<td>cell</td>);})}
            </tr>);})}
            <tr>{ columns.map(() => {return (<th><ColumnButton/></th>);})}</tr>
        </table>
        </div>
    );
    }

    renderColumns() {
        return (<span>COLS</span>);
    }
}