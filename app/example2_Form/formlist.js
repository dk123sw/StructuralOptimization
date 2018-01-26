import React, {Component} from 'react'
import Register from './register'

export default class extends Component {
    constructor(props){
            super(props);
            this.state={
                name:'',
                value:'',
            }
    }

    inputType = (name , value) =>{
        this.state({name:name , value:value});
    };

    render() {
        return(
            <Register
                name='姓名'
                sex='性别'
                value={this.state.value}
                inputType={this.inputType}
            />
        );
    }
}