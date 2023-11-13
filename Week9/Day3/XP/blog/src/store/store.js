import { createStore } from "redux";
import reducer from "../reducer/reducer.js"




const initialState={
    count:0
}

const store = createStore(reducer,initialState)

export default store;
