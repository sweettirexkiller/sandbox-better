import { fromJS } from 'immutable';
import { repeat } from 'ramda';

import {
    STARTING_PLAYER,
    FIELD_VALUES,
    DEFAULT_BOARD_SIZE
} from '../../game-logic/const';
import { getOppositePlayer } from '../../game-logic/logic';

import { SET_FIELD_VALUE, SET_BOARD_SIZE } from './const';
import { LOAD_SNAPSHOT } from '../history/const';

export const GAME_REDUCER_NAME = 'Game';

const generateEmptyBoard = (boardSize) =>
    fromJS(repeat(repeat(FIELD_VALUES.EMPTY, boardSize), boardSize));
const initialState = fromJS({
    gameState: {
        currentPlayer: STARTING_PLAYER,
        boardSize: DEFAULT_BOARD_SIZE,
        board: generateEmptyBoard(DEFAULT_BOARD_SIZE),
        moveNumber: 0
    },
    isRecordedState: false
});

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARD_SIZE:
            const { size } = action;
            return fromJS({
                gameState: {
                    currentPlayer: STARTING_PLAYER,
                    boardSize: +size,
                    board: generateEmptyBoard(+size),
                    moveNumber: 0
                },
                isRecordedState: false
            });
        case SET_FIELD_VALUE:
            return state
                .updateIn(['gameState', 'board'], (board) =>
                    boardReducer(board, action)
                )
                .updateIn(['gameState', 'currentPlayer'], getOppositePlayer)
                .updateIn(
                    ['gameState', 'moveNumber'],
                    (moveNumber) => moveNumber + 1
                )
                .set('isRecordedState', false);
        case LOAD_SNAPSHOT: {
            const { snapshot } = action;
            return state
                .set('gameState', snapshot)
                .set('isRecordedState', true);
        }
        default:
            return state;
    }
};

const boardReducer = (
    state = generateEmptyBoard(DEFAULT_BOARD_SIZE),
    action
) => {
    switch (action.type) {
        case SET_FIELD_VALUE: {
            const { x, y, value } = action;
            return state.setIn([y, x], value);
        }
        default:
            return state;
    }
};
