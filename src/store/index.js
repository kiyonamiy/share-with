import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// import createSagaMiddleware from 'redux-saga';
// import sagas from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

//第二个参数是为了配置浏览器 redux 扩展
const store = createStore(reducer, enhancer);
//Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware
//sagaMiddleware.run(sagas);

export default store;
