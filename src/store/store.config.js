import { createStore } from 'redux'
import {rootReducer} from '../reducers/root.reducer.js'

export function getStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/root.reducer.js', () => {
            const nextRootReducer = require('../reducers/root.reducer.js');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
