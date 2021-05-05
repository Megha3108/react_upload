import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={};
const middleWare=[thunk];

let store;
if (window.navigator.userAgent.includes("Chrome")) {
    store =  createStore(
        rootReducer,
        compose(applyMiddleware(...middleWare),
        ));
} else {
    store =  createStore(
        rootReducer,
        compose(applyMiddleware(...middleWare)));
}

export default store;