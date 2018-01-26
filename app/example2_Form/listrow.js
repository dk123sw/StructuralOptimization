import React, {Component} from 'react'

export default class extends Component {
    constructor(props){
            super(props);
        }
    render() {
        return(
            <div>
                <h3 className='labelRow'>{this.props.name}</h3>
                {this.props.children}
            </div>
        )
    }
}