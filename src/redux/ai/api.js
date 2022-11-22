import { post } from 'axios';
import { FIELD_VALUES } from '../../game-logic/const';
import { isNil, equals } from 'ramda';

const API_URL = 'https://tic-tac-toe-simple-server.herokuapp.com/api';

export const getNextMove = async (boardState) => {
    const board = boardState
        .flatten()
        .map((field) => (field === FIELD_VALUES.EMPTY ? '' : field))
        .toArray();

    const response = await post(`${API_URL}/move`, {
        board
    });
    let { nextMove } = response.data;

    if (isNil(nextMove)) {
        console.log('no response, making dummy move');
        nextMove = boardState.flatten().findIndex(equals(FIELD_VALUES.EMPTY));
    }

    return { x: nextMove % 3, y: Math.floor(nextMove / 3) };
};
