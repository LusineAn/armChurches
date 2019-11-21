import { combineReducers } from "redux";
import selectedImg from "./selectedImg";
import favorits from "./favorits";

export default combineReducers({ selectedImg, favorits });