const reducer = (state,action)=>{

    console.log(state);
    
        switch(action.type){
            case "INCREMENT":
                
            return  {
                ...state,
                count:state.count + 1
            } 
                
                
                
            case "DECREMENT":
            return  {
                ...state,
                count:state.count - 1
            }

            case 'ODD':
                
            return{
                ...state,
                count:state.count + 1
            }
                
                
            default :return state;
        }};
        export default reducer;
        
    