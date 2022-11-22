import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { GAME_REDUCER_NAME } from './reducer';
import { PLAYERS } from '../../game-logic/const';
import { calculateWinner, generateBoardLines } from '../../game-logic/logic';

const getGameReducerState = prop(GAME_REDUCER_NAME);

export const gameStateSelector = createSelector(
    getGameReducerState,
    (game) => game.get('gameState')
);

export const boardSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('board')
);

export const currentPlayerSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('currentPlayer')
);

export const boardSizeSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('boardSize')
);

export const boardLinesSelector = createSelector(
    boardSizeSelector,
    (boardSize) => generateBoardLines(boardSize)
);

export const winnnerSelector = createSelector(
    boardSelector,
    boardLinesSelector,
    (board, boardLines) => calculateWinner(board, boardLines)
);

export const moveNumberSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('moveNumber')
);

export const isGameFinishedSelector = createSelector(
    boardSizeSelector,
    moveNumberSelector,
    winnnerSelector,
    (boardSize, moveNumber, winner) =>
        moveNumber >= boardSize * boardSize || winner !== PLAYERS.UNKNOWN
);

export const isGameAHistorySnapshotSelector = createSelector(
    getGameReducerState,
    (game) => game.get('isRecordedState')
);
