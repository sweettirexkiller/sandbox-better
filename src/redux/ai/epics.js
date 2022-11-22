import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { prop, not, equals } from 'ramda';

import { SET_FIELD_VALUE, SET_BOARD_SIZE } from '../../containers/game/const';
import { SET_AI_MODE, AI_MODES } from './const';
import {
    currentPlayerSelector,
    isGameFinishedSelector,
    boardSelector
} from '../../containers/game/selectors';
import { aiPlayersSelector } from './selectors';
import { getNextMove } from './api';
import { makeMove } from '../../containers/game/actions';
import { setAiMode } from './actions';

const aiMoveEpic = (action$, state$) =>
    action$.pipe(
        ofType(SET_FIELD_VALUE, SET_AI_MODE),
        map(() => ({
            isGameFinished: isGameFinishedSelector(state$.value),
            aiPlayers: aiPlayersSelector(state$.value),
            currentPlayer: currentPlayerSelector(state$.value)
        })),
        filter(
            ({ isGameFinished, aiPlayers, currentPlayer }) =>
                !isGameFinished && aiPlayers.includes(currentPlayer)
        ),
        map(() => boardSelector(state$.value)),
        switchMap((board) =>
            from(getNextMove(board)).pipe(map(({ x, y }) => makeMove(x, y)))
        )
    );

const resetModeOnBoardSizeChangeEpic = (action$) =>
    action$.pipe(
        ofType(SET_BOARD_SIZE),
        map(prop('size')),
        filter((size) => not(equals(3, size))),
        map(() => setAiMode(AI_MODES.PLAYER_VS_PLAYER))
    );

export const aiEpics = combineEpics(aiMoveEpic, resetModeOnBoardSizeChangeEpic);
