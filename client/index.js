import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App.jsx';
import './stylesheets/global.scss';
import { store } from './redux/store.js'
import * as ReactDOM from "react-dom/client";
import { theme } from './stylesheets/theme.js'


// This file serves as the entry point to our React application.
// Whenever changes are made to the React components, this file 
// ensures they get rendered and displayed on the page.

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store = { store }>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>, 
);