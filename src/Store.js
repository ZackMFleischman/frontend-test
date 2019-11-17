import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/RootReducer';
import { isTest } from './Environment';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const createReduxStore = () => {
    if (isTest())
        return createStore(rootReducer, applyMiddleware(thunk));
    else
        return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}