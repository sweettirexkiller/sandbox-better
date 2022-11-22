import { combineEpics } from 'redux-observable';

import { gameEpics } from './containers/game/epics';
import { aiEpics } from './redux/ai/epics';

export const rootEpic = combineEpics(gameEpics, aiEpics);
