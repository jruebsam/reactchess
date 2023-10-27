import './cell-styles.css';
import { isLightSquare } from '../../functions';
import { Cell } from '../../functions/create-board';

import { PropsWithChildren } from 'react'


interface CellProps {
    cell: Cell;
    index: number;
}

const CellComp = ({ cell, index }: PropsWithChildren<CellProps>) => {
    const light = isLightSquare(cell.pos, index);
    return <div className={`cell ${light ? 'light' : 'dark'}`}>{cell.pos}</div>
};

export default CellComp;
