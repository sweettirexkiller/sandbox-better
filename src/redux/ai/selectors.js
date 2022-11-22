import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { AI_REDUCER_NAME } from './reducer';

const getAiReducerState = prop(AI_REDUCER_NAME);

export const aiModeSelector = createSelector(
    getAiReducerState,
    (ai) => ai.get('mode')
);

export const aiPlayersSelector = createSelector(
    getAiReducerState,
    (ai) => ai.get('aiPlayers')
);
