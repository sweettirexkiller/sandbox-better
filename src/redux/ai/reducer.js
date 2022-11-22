import { fromJS } from 'immutable';
import { AI_MODES, SET_AI_MODE } from './const';
import { PLAYERS } from '../../game-logic/const';

export const AI_REDUCER_NAME = 'Ai';

const initialState = fromJS({
    mode: AI_MODES.PLAYER_VS_PLAYER,
    aiPlayers: []
});

export const aiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AI_MODE: {
            const { mode } = action;

            const players = [];
            switch (mode) {
                case AI_MODES.PLAYER_VS_AI:
                    players.push(PLAYERS.O);
                    break;
                case AI_MODES.AI_VS_AI:
                    players.push(PLAYERS.O);
                    players.push(PLAYERS.X);
                    break;
                default:
            }

            return state.set('mode', mode).set('aiPlayers', fromJS(players));
        }
        default:
            return state;
    }
};
