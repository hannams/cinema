import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';
import composeWithDevTools from 'redux-devtools-extension';

const tools = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, tools);

export default store;