import React from 'react';
import { HistoryItemWrapper } from './HistoryItemWrapper';

export let HistoryItem = ({ moveNumber, player, emph, onClick }) => (
    <HistoryItemWrapper player={player} emph={emph} onClick={onClick}>
        {moveNumber > 0 ? `Go to move #${moveNumber}` : 'Go to game start'}
    </HistoryItemWrapper>
);
