import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from 'core/Store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</StrictMode>);

