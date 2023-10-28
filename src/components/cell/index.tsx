import './cell-styles.css';
import { isLightSquare } from '../../functions';
import { Cell } from '../../functions/create-board';

import { PropsWithChildren } from 'react'
import Piece from '../piece';

interface CellProps {
    cell: Cell;
    index: number;
    makeMove: (pos: string) => void;
    setFromPos: (pos: string) => void;
}

const CellComp = ({ cell, index, makeMove, setFromPos }: PropsWithChildren<CellProps>) => {
    const light = isLightSquare(cell.pos, index);

    const handleDrop = () => {
        console.log(`CELL POS: ${cell.pos}`);
        makeMove(cell.pos);
        console.log('hi');
    }

    return (
        <div className={`cell ${light ? 'light' : 'dark'}`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <Piece pos={cell.pos} name={cell.piece} setFromPos={setFromPos} />
        </div >
    )
};

export default CellComp;
