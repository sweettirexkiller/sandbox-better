import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';

export const SquareWrapper = styled.button`
    color: ${({ player }) => theme(`colors.players.${player}`)};
    border: 1px solid ${theme('colors.border')};

    float: left;

    font-size: ${theme('fonts.board.fontSize')};
    font-weight: ${theme('fonts.board.fontWeight')};
    line-height: ${theme('fonts.board.lineHeight')};

    height: ${theme('fonts.board.lineHeight')};
    width: ${theme('fonts.board.lineHeight')};

    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;

    cursor: ${ifProp('disabled', 'default', 'pointer')};

    outline: none;

    &:hover {
        background: ${ifProp(
            'disabled',
            theme('colors.background'),
            theme('colors.board.hoverBackground')
        )};
    }
`;
