import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

let store = null;
export let sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, history = null) {
    /* Middleware
   * Configure this array with the middleware that you want included
   */
    store = null;
    sagaMiddleware = createSagaMiddleware();
    let middleware = [
        sagaMiddleware
    ];

    // Add universal enhancers here
    let enhancers = [];

    const composeEnhancers = (
        typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) || compose;
    const enhancer = composeEnhancers(...[
        applyMiddleware(...middleware),
        ...enhancers
    ]);

    // create store with enhancers, middleware, reducers, and initialState
    store = createStore(rootReducer, initialState, enhancer);
    store.asyncReducers = {};
    store.dynamicSagas = {};

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            const nextRootReducer = require("../reducers").default;
            store.replaceReducer(nextRootReducer);
        });
    }

    sagaMiddleware.run(rootSaga);
    store.runSaga = sagaMiddleware.run;
    return store;
}