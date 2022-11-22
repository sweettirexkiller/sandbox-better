import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StatusWrapper = styled.div`
    color: ${({ currentPlayer, isGameFinished, winner }) =>
        theme(`colors.players.${isGameFinished ? winner : currentPlayer}`)};
    padding: 0 ${theme('dims.basicSpacing')} ${theme('dims.basicSpacing')};
    text-align: center;
`;
