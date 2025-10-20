import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counterReducer";
import { todosReducer } from "./services/reducers/TodoReducers";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  counterR: counterReducer,
  todosR: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
