import './board-styles.css';
import { Cell } from '../../functions/create-board';
import CellComp from '../../components/cell';

interface BoardProps {
    cells: Cell[];
}

const Board = ({ cells }: BoardProps) => {
    return (
        <div className="board">
            {cells.map((cell, index) => (
                <CellComp cell={cell} index={index} key={cell.pos}>{cell.pos}</CellComp>
            ))}
        </div>
    )
};

export default Board;
