import './board-styles.css';
import { Cell } from '../../functions/create-board';

interface BoardProps {
    cells: Cell[];
}

const Board = ({ cells }: BoardProps) => {
    return (
        <div className="board">
            {cells.map((cell) => (
                <div key={cell.pos}>{cell.pos}</div>
            ))}
        </div>
    )
};

export default Board;
