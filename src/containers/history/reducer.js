import { fromJS, Map } from 'immutable';

import { RESET_HISTORY, UPDATE_HISTORY, LOAD_SNAPSHOT } from './const';

export const HISTORY_REDUCER_NAME = 'History';

const initialState = fromJS({
    history: [],
    currentItem: 0
});

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_HISTORY:
            return initialState;
        case UPDATE_HISTORY: {
            const { moveNumber, snapshot } = action;

            return state
                .update('history', (history) =>
                    history.splice(
                        moveNumber,
                        history.size - moveNumber,
                        Map({
                            moveNumber,
                            snapshot
                        })
                    )
                )
                .set('currentItem', moveNumber);
        }
        case LOAD_SNAPSHOT:
            return state.set('currentItem', action.moveNumber);
        default:
            return state;
    }
};
