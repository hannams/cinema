import { combineReducers } from "redux";
import { user } from './user/user';
import {movie} from "./movie/movie";
import {screening} from "./screening/screening";

export const rootReducer = combineReducers({user, movie, screening});