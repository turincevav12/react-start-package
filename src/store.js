import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
import createHistory from "history/createMemoryHistory";
import createRootReducer from './reducer'

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
);