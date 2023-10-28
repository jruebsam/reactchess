import './piece-styles.css';
import { useRef } from 'react';


interface PieceProps {
    name: string;
    pos: string;
    setFromPos: (pos: string) => void;
}

const chessPieceMatch = /^[bw][BKNPQR]$/;


const Piece = ({ name, pos, setFromPos }: PieceProps) => {
    const color = name === name.toUpperCase() ? 'w' : 'b';
    const imageName = color + name.toUpperCase();
    const element = useRef<HTMLImageElement>(null);

    let imgSrc: string = '';
    if (imageName.match(chessPieceMatch)) {
        imgSrc = `assets/pieces/${imageName}.png`;
    } else {
        imgSrc = 'assets/pieces/empty.png';
    }

    const handleDragStart = () => {
        setFromPos(pos);
        setTimeout(() => {
            if (element.current !== null) {
                element.current.style.display = 'none';
            }
        }, 0);
    };

    const handleDragEnd = () => {
        if (element.current !== null) {
            element.current.style.display = 'block';
        }
    }

    return (
        <img
            className='piece'
            src={imgSrc}
            alt={pos}
            ref={element}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        />
    )
};

export default Piece;