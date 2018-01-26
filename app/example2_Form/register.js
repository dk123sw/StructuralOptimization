import React, {Component} from 'react'
import ListRow from './listrow'

export default class extends Component {
    constructor(props){
            super(props);
            this.state={
                value:'1',
                select:'women',
            }
        }

    onHandleChange = event =>{
        this.props.inputType(event.target.name ,event.target.value);
    };

    Value1='';
    Value2='';
    render() {
        if(this.props.name === 'input'){
            this.Value1 = this.props.value;
        }else {
            this.Value2 = this.props.value;
        }
        return(
            <div>
                <ListRow name={this.props.name}>
                    <input
                        className='labelRow'
                        name='input'
                        value={this.Value1}
                        onChange={this.onHandleChange}
                    />
                </ListRow>
                <ListRow name={this.props.sex}>
                    <form className='labelRow'>
                        <select name='select' value={this.Value2} onChange={this.onHandleChange}>
                            <option value='man'>男</option>
                            <option value='women'>女</option>
                        </select>
                    </form>
                </ListRow>
            </div>
        )
    }
}