import * as React from 'react';

import { LifeData } from '../data/LifeData';
import { LifeCellMeteorContainer } from './LifeCellMeteorContainer';

interface CellGridProps {
    data: LifeData;
}

// This react component can render a grid of cells, displaying
// the state of the cellular automat.
// The current implementation simply uses and HTML table, with tr and td tags.
export class CellGrid extends React.Component<CellGridProps,{}> {

    private renderCell(x:number, y:number) {
        return (
            <LifeCellMeteorContainer
                key={"col-"+x}
                x={x}
                y={y}
                data={this.props.data}
            />
        )
    }
    
    private renderRow(y:number) {
        const cols = []
        for (let x = 0; x < this.props.data.getWidth(); x++) {
            cols.push(this.renderCell(x,y));
        }        
        return (
            <tr key={"row-"+y}>
                { cols }
            </tr>
        );
    }

    private renderTable() {
        const rows = [];
        for (let y = 0; y < this.props.data.getHeight(); y++) {
            rows.push(this.renderRow(y));
        }
        return (
            <table className="cell-grid"><tbody>
                { rows }
            </tbody></table>
        );
    }
    
    public render() {
//        return this.renderRow(1);
        return this.renderTable();
    }
}
