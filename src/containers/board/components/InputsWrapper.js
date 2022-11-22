import styled from 'styled-components';
import { theme } from 'styled-tools';

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;

    padding-top: ${theme('dims.basicSpacing')};
`;
