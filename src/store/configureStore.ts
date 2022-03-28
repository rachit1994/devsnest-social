import { createStore, applyMiddleware, compose } from "redux";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import combinedReducers from "./combineReducers";

const configureStore = (initialState = {}) => {
  const composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const runSaga = sagaMiddleware.run;

  const enhancers: Array<any> = [applyMiddleware(...middlewares), createInjectorsEnhancer({ createReducer: combinedReducers, runSaga })];

  return createStore(
    combinedReducers(),
    initialState,
    composeEnhancers(...enhancers)
  );
};

export default configureStore;
