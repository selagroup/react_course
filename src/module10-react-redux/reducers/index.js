import { combineReducers } from "redux";
import { theme } from "./theme.reducer";
import { movies } from "./movies.reducer";
 


export default combineReducers({ theme, movies });