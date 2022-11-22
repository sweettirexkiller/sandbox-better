import { ofType, combineEpics } from 'redux-observable';
import { map, filter, startWith } from 'rxjs/operators';

import { SET_FIELD_VALUE, MAKE_MOVE, SET_BOARD_SIZE } from './const';
import {
    isGameFinishedSelector,
    currentPlayerSelector,
    moveNumberSelector,
    gameStateSelector
} from './selectors';
import { setFieldValue } from './actions';
import { resetHistory, updateHistory } from '../history/actions';
import { RESET_HISTORY } from '../history/const';

const makeMoveEpic = (action$, state$) =>
    action$.pipe(
        ofType(MAKE_MOVE),
        filter(() => !isGameFinishedSelector(state$.value)),
        map(({ x, y }) => ({
            x,
            y,
            currentPlayer: currentPlayerSelector(state$.value)
        })),
        map(({ x, y, currentPlayer }) => setFieldValue(x, y, currentPlayer))
    );

const updateHistoryOnMoveEpic = (action$, state$) =>
    action$.pipe(
        ofType(SET_FIELD_VALUE, RESET_HISTORY),
        startWith("I'm here just for init and my value will be ignored"),
        map(() => ({
            moveNumber: moveNumberSelector(state$.value),
            gameState: gameStateSelector(state$.value)
        })),
        map(({ moveNumber, gameState }) => updateHistory(moveNumber, gameState))
    );

const resetHistoryEpic = (action$) =>
    action$.pipe(
        ofType(SET_BOARD_SIZE),
        map(() => resetHistory())
    );

export const gameEpics = combineEpics(
    makeMoveEpic,
    updateHistoryOnMoveEpic,
    resetHistoryEpic
);
