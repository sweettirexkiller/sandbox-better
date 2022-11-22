import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const HistoryItemWrapper = styled.button`
    background: ${theme('colors.background')};
    border-width: ${ifProp('emph', '2px', '1px')};
    border-color: ${({ player }) =>
        ifProp(
            'emph',
            theme(`colors.players.${player}`),
            theme('colors.border')
        )};
    color: ${({ player }) => theme(`colors.players.${player}`)};
    border-radius: 0;

    padding: ${theme('dims.basicSpacing')} ${theme('dims.smallSpacing')};
    font-weight: bold;

    opacity: ${ifProp('emph', 1, 0.7)};

    outline: none;
    cursor: ${ifProp('emph', 'default', 'pointer')};

    &:hover {
        opacity: 1;
    }
`;
