import styled from 'styled-components';
import { theme } from 'styled-tools';

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: ${theme('dims.history.width')};
`;
