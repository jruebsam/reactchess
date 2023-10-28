import './board-styles.css';
import { Cell } from '../../functions/create-board';
import CellComp from '../../components/cell';

interface BoardProps {
    cells: Cell[];
    makeMove: (pos: string) => void;
    setFromPos: (pos: string) => void;
}

const Board = ({ cells, ...props }: BoardProps) => {
    return (
        <div className="board">
            {cells.map((cell, index) => (
                <CellComp {...props} cell={cell} index={index} key={cell.pos} />
            ))}
        </div>
    )
};

export default Board;
