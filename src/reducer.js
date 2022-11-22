import { combineReducers } from 'redux';

import { GAME_REDUCER_NAME, gameReducer } from './containers/game/reducer';
import {
    HISTORY_REDUCER_NAME,
    historyReducer
} from './containers/history/reducer';

import { AI_REDUCER_NAME, aiReducer } from './redux/ai/reducer';

export default function createReducer() {
    return combineReducers({
        [GAME_REDUCER_NAME]: gameReducer,
        [HISTORY_REDUCER_NAME]: historyReducer,
        [AI_REDUCER_NAME]: aiReducer
    });
}
