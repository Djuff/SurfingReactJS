import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { commentsReducer } from '../reducers/commentsReducer';

const middleware = applyMiddleware(promise(), logger());

const reducers = combineReducers({
    comments: commentsReducer
});

const store = createStore(reducers, middleware);

export default store;