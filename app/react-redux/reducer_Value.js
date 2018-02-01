import {IsValue} from "./action";

function Value(state,action) {
    switch (action.type){
        case IsValue:
        {
            return IsValue;
        }
        default:
            return state;
    }
}

export default Value

