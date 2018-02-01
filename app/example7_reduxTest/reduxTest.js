import React, {Component} from 'react'

class Test extends Component {
    constructor(props){
            super(props);
        }

    componentWillMount(){
        // this.props.proValue('1');
        // this.props.addValue('2');
        // this.props.delValue('3');
    }

    render() {
        return(
            <div>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                {/*<p>{this.props.reValue}</p>*/}
                {/*<p>{this.props.reValue}</p>*/}
                {/*<p>{this.props.reValue}</p>*/}
            </div>
        )
    }
}

export default Test