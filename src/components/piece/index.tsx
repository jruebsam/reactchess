import './piece-styles.css';


interface PieceProps {
    name: string;
    pos: string;
}


const chessPieceMatch = /^[bw][BKNPQR]$/;


const Piece = ({ name, pos }: PieceProps) => {
    const color = name === name.toUpperCase() ? 'w' : 'b';
    const imageName = color + name.toUpperCase();

    let imgSrc: string = '';
    if (imageName.match(chessPieceMatch)) {
        imgSrc = `assets/pieces/${imageName}.png`;
    } else {
        imgSrc = 'assets/pieces/empty.png';
    }

    return (
        <img
            className='piece'
            src={imgSrc}
            alt={pos}
            draggable={true}
        />
    )
};

export default Piece;