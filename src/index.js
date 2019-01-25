import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import store, {history} from './store'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import App from './containers/App'

import './dist/index.css'

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    target
);
