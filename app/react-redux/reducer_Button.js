import {IsButton} from "./action";


function Button(state='pause' ,action) {
    switch (action.type){
        case IsButton:
        {
           return action.content;
        }
        default:
            return state;
    }
}
export default Button
