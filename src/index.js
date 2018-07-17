import React from 'react';
import { render } from 'react-dom';
import { App } from './containers/app.container.jsx';
import { Provider } from 'react-redux'

import './style/scss/style.scss'
import {getStore} from './store/store.config'


const store = getStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
