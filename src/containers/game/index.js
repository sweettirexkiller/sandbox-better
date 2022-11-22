import React from 'react';

import { Status } from '../game-status';
import { Board } from '../board';
import { History } from '../history';
import { GameWrapper, GameInfoWrapper } from './components';

export const Game = () => (
    <GameWrapper>
        <Board />

        <GameInfoWrapper>
            <Status />

            <History />
        </GameInfoWrapper>
    </GameWrapper>
);
