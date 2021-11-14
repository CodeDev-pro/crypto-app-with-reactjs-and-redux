import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { store } from './domain/redux/store/store';
import { theme } from './ui/theme/theme'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme ={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)