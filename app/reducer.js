import Button from './react-redux/reducer_Button';
import Value from './react-redux/reducer_Value';

function coreData(state = {}, action) {
    return {
        reButton:Button(state.reButton ,action),
        reValue:Value(state.reValue ,action),
    }
}

export default coreData




