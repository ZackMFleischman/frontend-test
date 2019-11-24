import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/RootReducer';
import { isTest } from './Environment';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const createReduxStore = (initialState = rootReducer(undefined, {})) => {
    if (isTest())
        return createStore(rootReducer, initialState, applyMiddleware(thunk));
    else
        return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}