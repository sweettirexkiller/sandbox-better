import React, { useCallback } from 'react';
import { Square, InputsWrapper } from './components';
import {
    FIELD_VALUES,
    MIN_BOARD_SIZE,
    MAX_BOARD_SIZE
} from '../../game-logic/const';
import { AI_MODES } from '../../redux/ai/const';
import { useSelector, useDispatch } from 'react-redux';
import {
    boardSelector,
    boardSizeSelector,
    isGameFinishedSelector
} from '../game/selectors';
import { makeMove, setBoardSize } from '../game/actions';
import { isEmpty, clamp } from 'ramda';
import { aiModeSelector } from '../../redux/ai/selectors';
import { setAiMode } from '../../redux/ai/actions';

export const Board = () => {
    const board = useSelector(boardSelector);
    const boardSize = useSelector(boardSizeSelector);
    const aiMode = useSelector(aiModeSelector);
    const gameFinished = useSelector(isGameFinishedSelector);
    const dispatch = useDispatch();
    const onFieldClick = useCallback((x, y) => dispatch(makeMove(x, y)), [
        dispatch
    ]);
    const onSizeChange = useCallback(
        (event) => {
            const value = event.target.value;
            const size = isEmpty(value) ? MIN_BOARD_SIZE : +value;
            dispatch(setBoardSize(clamp(MIN_BOARD_SIZE, MAX_BOARD_SIZE, size)));
        },
        [dispatch]
    );
    const onModeChange = useCallback(
        (event) => {
            const mode = event.target.value;
            dispatch(setAiMode(mode));
        },
        [dispatch]
    );

    return (
        <div>
            {board.map((row, y) => (
                <div key={`row-${y}`} className="board-row">
                    {row.map((fieldValue, x) => (
                        <Square
                            key={`field-${x}-${y}`}
                            value={fieldValue}
                            onClick={() => onFieldClick(x, y)}
                            disabled={
                                fieldValue !== FIELD_VALUES.EMPTY ||
                                gameFinished
                            }
                        />
                    ))}
                </div>
            ))}

            <InputsWrapper>
                <label>size:</label>
                <input
                    type="number"
                    min={MIN_BOARD_SIZE}
                    max={MAX_BOARD_SIZE}
                    value={boardSize}
                    onChange={onSizeChange}
                />
                <label>mode:</label>
                <select
                    value={aiMode}
                    onChange={onModeChange}
                    disabled={boardSize !== 3}>
                    <option value={AI_MODES.PLAYER_VS_PLAYER}>
                        player vs. player
                    </option>
                    <option value={AI_MODES.PLAYER_VS_AI}>player vs. ai</option>
                    <option value={AI_MODES.AI_VS_AI}>ai vs. ai</option>
                </select>
            </InputsWrapper>
        </div>
    );
};
