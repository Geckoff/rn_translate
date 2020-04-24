import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return store;
};
