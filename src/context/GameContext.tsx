import { createContext, useReducer } from "react";
import GameReducer from './GameReducer';

import type { ReactNode } from "react";
import type { IGameAction } from "./actions";

export interface GameContextProps {
    possibleMoves: string[],
    dispatch: React.Dispatch<IGameAction>;
}

const initialState: GameContextProps = {
    possibleMoves: [],
    dispatch: () => { }
};

export const GameContext = createContext<GameContextProps>(initialState);

export interface GameProviderProps {
    children: ReactNode
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    return (
        <GameContext.Provider value={{ possibleMoves: state.possibleMoves, dispatch: dispatch }}>
            {children}
        </GameContext.Provider>
    );
};
