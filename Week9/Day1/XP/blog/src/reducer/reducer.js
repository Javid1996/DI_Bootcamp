



const reducer = (state,action)=>{

console.log(state);

    switch(action.type){
        case "INCREASE_COUNT":
            
        return  {
            ...state,
            count:state.count + 1
        } 
            
            
            
        case "DECREASE_COUNT":
        return  {
            ...state,
            count:state.count - 1
        }
            
            
        default :return state;
    }};
    export default reducer;
    
