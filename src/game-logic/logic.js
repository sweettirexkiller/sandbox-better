import { unnest, map, range, reduce, all, equals } from 'ramda';

import { PLAYERS, FIELD_VALUES } from './const';

export const generateBoardLines = (boardSize) => {
    const lineRange = range(0, boardSize);
    const lines = unnest(
        map(
            (i) => [
                map((j) => [j, i], lineRange),
                map((j) => [i, j], lineRange)
            ],
            lineRange
        )
    );
    lines.push(map((i) => [i, i], lineRange));
    lines.push(map((i) => [i, boardSize - 1 - i], lineRange));
    return lines;
};

export const calculateWinner = (board, lines) =>
    reduce(
        (currentWinner, line) => {
            const firstElement = board.getIn(line[0]);
            const isLineConsistent = all(
                equals(firstElement),
                map((pos) => board.getIn(pos), line)
            );
            const isFirstElementEmpty = firstElement === FIELD_VALUES.EMPTY;

            return isLineConsistent && !isFirstElementEmpty
                ? firstElement
                : currentWinner;
        },
        PLAYERS.UNKNOWN,
        lines
    );

export const getOppositePlayer = (player) => {
    switch (player) {
        case PLAYERS.X:
            return PLAYERS.O;
        case PLAYERS.O:
            return PLAYERS.X;
        default:
            return PLAYERS.UNKNOWN;
    }
};
