import {IsValue} from "./action";

function Value(state=0 ,action) {
    switch (action.type){
        case IsValue:
        {
            return action.content;
        }
        default:
            return state;
    }
}

export default Value

