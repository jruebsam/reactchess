import './cell-styles.css';
import { isLightSquare } from '../../functions';
import { Cell } from '../../functions/create-board';

import { GameContext } from '../../context/GameContext';
import { PropsWithChildren, useContext } from 'react'
import Piece from '../piece';

interface CellProps {
    cell: Cell;
    index: number;
    makeMove: (pos: string) => void;
    setFromPos: (pos: string) => void;
}

const CellComp = ({ cell, index, makeMove, setFromPos }: PropsWithChildren<CellProps>) => {
    const light = isLightSquare(cell.pos, index);

    const { possibleMoves } = useContext(GameContext);
    const isPossibleMove = possibleMoves.includes(cell.pos);

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
            <div className={`overlay ${isPossibleMove && 'possible-move'}`}>
                <Piece pos={cell.pos} name={cell.piece} setFromPos={setFromPos} />
            </div>
        </div >
    )
};

export default CellComp;
