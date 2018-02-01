import React, {Component} from 'react'
import DATA from '../DATA';
import First from './frist';
import Second from './second.js';
import Third from './third';

const statusType = {stop: 0, move: 1};
export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0,
            status: statusType.stop,
            velocity: 100,
        }
    }

    onVelocityChange = (value) =>{
        this.setState({velocity:value});
    };

    onIndexChange = (value) => {
        this.setState({index: value});
    };

    onStatusChange = (value) => {
        let count = DATA.position.length;
        this.setState({status: value});
        if (value === statusType.move) {
            this.timerID = setInterval(() => {
                this.setState({index: this.state.index + 1});
                if (this.state.index === count-1) {
                    this.setState({index: -1});
                    this.setState({status: statusType.stop});
                    clearInterval(this.timerID);
                }
            }, 200-this.state.velocity);
        }
        else{
            clearInterval(this.timerID);
        }
    };

    onChoiceTime =(value1 , value2) =>{
        console.log(value1+'middle'+value2);
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    render() {
        return (
            <div>
                <First onIndexChange={this.onIndexChange}
                       index={this.state.index}
                       status={this.state.status}/>
                {/*<div id='proTime'>*/}
                    {/*<Second*/}
                        {/*onChoiceTime={this.onChoiceTime}*/}
                    {/*/>*/}
                {/*</div>*/}
                <Third
                    index={this.state.index}
                    status={this.state.status}
                    velocity={this.state.velocity}
                    onStatusChange={this.onStatusChange}
                    onIndexChange={this.onIndexChange}
                    onVelocityChange={this.onVelocityChange}
                    onChoiceTime={this.onChoiceTime}
                />
            </div>
        )
    }
}


