import { UPDATE_HISTORY, LOAD_SNAPSHOT, RESET_HISTORY } from './const';

export const resetHistory = () => ({
    type: RESET_HISTORY
});

export const updateHistory = (moveNumber, snapshot) => ({
    type: UPDATE_HISTORY,
    moveNumber,
    snapshot
});

export const loadSnapshot = (moveNumber, snapshot) => ({
    type: LOAD_SNAPSHOT,
    moveNumber,
    snapshot
});
