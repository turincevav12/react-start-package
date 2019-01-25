import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import articles from "./articles";

export default (history) => combineReducers({
    articles,
    router: connectRouter(history),
});