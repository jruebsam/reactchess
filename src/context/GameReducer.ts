import { GameActionTypes } from './actions';
import type { IGameAction } from './actions';
import type { GameContextProps } from './GameContext';

const getPositions = (moves: string[]) => {
    return moves.map((move) => {
        const n = move.length;
        return move.substring(n - 2);
    })
};

const GameReducer = (state: GameContextProps, action: IGameAction): GameContextProps => {
    switch (action.type) {
        case GameActionTypes.SET_POSSIBLE_MOVES:
            return {
                ...state,
                possibleMoves: getPositions(action.moves),
            };
        case GameActionTypes.CLEAR_POSSIBLE_MOVES:
            return {
                ...state,
                possibleMoves: [],
            };
        default:
            return state;
    }
}

export default GameReducer;