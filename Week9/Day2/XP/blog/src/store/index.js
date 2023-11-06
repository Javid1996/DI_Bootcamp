import { createStore } from "redux";
import reducer from "../reducer/reducer.js"




const initialState={data:[]}

const store = createStore(reducer,initialState)

export default store;

