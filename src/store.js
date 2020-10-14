import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import { videoSaga } from './sagas';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(videoSaga);
