export enum GameActionTypes {
    SET_POSSIBLE_MOVES = 'SET_POSSIBE_MOVES',
    CLEAR_POSSIBLE_MOVES = 'CLEAR_POSSIBE_MOVES',
}

interface IActionSetPossibeMoves {
    type: GameActionTypes.SET_POSSIBLE_MOVES,
    moves: string[]
}

interface IActionClearPossibleMoves {
    type: GameActionTypes.CLEAR_POSSIBLE_MOVES,
}

export type IGameAction = IActionSetPossibeMoves | IActionClearPossibleMoves