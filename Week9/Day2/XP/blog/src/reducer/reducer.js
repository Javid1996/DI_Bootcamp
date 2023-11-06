



const reducer = (state,action)=>{

// console.log(state);

    switch(action.type){
        case "INSERT":
            
        return  {
            ...state,
            data:[...state.data,action.payload]
        } 
            
            
            
        default :return state;
    }};
    export default reducer;
    
