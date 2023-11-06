import {combineReducers, createStore} from 'redux';

const initialState = null; 


function searchReducer(state = initialState,action){
    if(action.type==="SEARCH_ROBOTS"){
        return action.payload
    }
return state;
}


const rootReducer=combineReducers({
   search: searchReducer 
})


 export const store = createStore(rootReducer)