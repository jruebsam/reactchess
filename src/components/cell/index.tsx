import './cell-styles.css';
import { isLightSquare } from '../../functions';
import { Cell } from '../../functions/create-board';

import { PropsWithChildren } from 'react'
import Piece from '../piece';

interface CellProps {
    cell: Cell;
    index: number;
}

const CellComp = ({ cell, index }: PropsWithChildren<CellProps>) => {
    const light = isLightSquare(cell.pos, index);
    return (
        <div className={`cell ${light ? 'light' : 'dark'}`}>
            <Piece pos={cell.pos} name={cell.piece} />
        </div>
    )
};

export default CellComp;
