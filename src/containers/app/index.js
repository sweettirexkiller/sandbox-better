import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';
import { GlobalStyle } from '../../global-styles';

import { Game } from '../game';

export const App = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />

            <Game />
        </>
    </ThemeProvider>
);
