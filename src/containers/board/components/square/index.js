import React from 'react';
import { SquareWrapper } from './SquareWrapper';

export const Square = ({ value, onClick, disabled }) => (
    <SquareWrapper disabled={disabled} player={value} onClick={onClick}>
        {value}
    </SquareWrapper>
);
