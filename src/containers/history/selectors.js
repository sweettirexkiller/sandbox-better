import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { HISTORY_REDUCER_NAME } from './reducer';

const getHistoryReducerState = prop(HISTORY_REDUCER_NAME);

export const historySelector = createSelector(
    getHistoryReducerState,
    (history) => history.get('history')
);

export const currentItemSelector = createSelector(
    getHistoryReducerState,
    (history) => history.get('currentItem')
);
