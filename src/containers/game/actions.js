import { SET_BOARD_SIZE, MAKE_MOVE, SET_FIELD_VALUE } from './const';

export const setBoardSize = (size) => ({
    type: SET_BOARD_SIZE,
    size
});

export const makeMove = (x, y) => ({
    type: MAKE_MOVE,
    x,
    y
});

export const setFieldValue = (x, y, value) => ({
    type: SET_FIELD_VALUE,
    x,
    y,
    value
});
