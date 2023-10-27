export class Cell {
    pos: string;
    piece: string;

    constructor(pos: string, piece: string) {
        this.pos = pos;
        this.piece = piece;
    }
}


const range = (n: number): Array<number> => {
    return Array.from({ length: n }, (_, i) => i + 1);
}


export const createBoard = (fenString: string) => {
    const fen = fenString.split(' ')[0];
    const fenPieces = fen.split('/').join('');
    let pieces = Array.from(fenPieces);


    Array.from(fenPieces).forEach((item, index) => {
        let xn = parseInt(item);
        if (!isNaN(xn) && isFinite(xn)) {
            let fill = range(xn).map(() => " ");
            pieces.splice(index, 1, ...fill);
        }
    });

    pieces = pieces.flat();

    const rows = range(8)
        .map((n) => n.toString())
        .reverse();

    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const cells: Array<string> = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        for (let j = 0; j < columns.length; j++) {
            const col = columns[j]
            cells.push(col + row);
        }
    }

    const board: Array<Cell> = [];
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const piece = pieces[i];
        board.push(new Cell(cell, piece));
    }

    return board;
}

console.log(
    createBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
);
