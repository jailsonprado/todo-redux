import { combineReducers } from "redux";

import todosReducer from "./todos/todos-slice";
import filtersReducer from "./filters/filters-slice";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
