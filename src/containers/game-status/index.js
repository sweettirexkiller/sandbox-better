import React from 'react';
import { useSelector } from 'react-redux';
import { PLAYERS } from '../../game-logic/const';
import {
    currentPlayerSelector,
    isGameFinishedSelector,
    winnnerSelector
} from '../game/selectors';
import { StatusWrapper } from './components';

export const Status = () => {
    const currentPlayer = useSelector(currentPlayerSelector);
    const isGameFinished = useSelector(isGameFinishedSelector);
    const winner = useSelector(winnnerSelector);

    let message = `Next player: ${currentPlayer}`;

    if (isGameFinished) {
        message = winner !== PLAYERS.UNKNOWN ? `Winner: ${winner}` : 'A draw';
    }

    return (
        <StatusWrapper
            currentPlayer={currentPlayer}
            isGameFinished={isGameFinished}
            winner={winner}>
            {message}
        </StatusWrapper>
    );
};
