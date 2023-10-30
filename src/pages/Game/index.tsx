import { useState, useRef, useEffect, useContext } from "react";
import { Chess } from 'Chess.js'
import { createBoard } from "../../functions";
import { GameContext } from "../../context/GameContext";
import { types } from "../../context/actions";

import Board from '../../components/board';

const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const Game = () => {
    const [fen, setFen] = useState(FEN);
    const { current: chess } = useRef(new Chess(fen));
    const [board, setBoard] = useState(createBoard(fen));
    const { dispatch } = useContext(GameContext);

    useEffect(() => {
        setBoard(createBoard(fen));
    }, [fen]);

    const fromPos = useRef<string>("");

    const makeMove = (pos: string) => {
        const from = fromPos.current;
        const to = pos;
        chess.move({ from, to });
        dispatch({ type: types.CLEAR_POSSIBLE_MOVES })
        setFen(chess.fen());
    };

    const setFromPos = (pos: string): void => {
        fromPos.current = pos;
        dispatch({
            type: types.SET_POSSIBLE_MOVES,
            moves: chess.moves({ square: pos }),
        })
    };

    return (
        <div className="game">
            <Board cells={board} makeMove={makeMove} setFromPos={setFromPos} />
        </div>
    )

}

export default Game;


