import { createStore } from "redux";
import AuthReducer from "./Reducer";
const store = createStore(AuthReducer);
export default store;