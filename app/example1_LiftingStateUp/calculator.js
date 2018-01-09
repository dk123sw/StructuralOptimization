import React, {Component} from 'react'
import Animal from './animal';
import {Button} from 'antd-mobile';

let foot;
let count;
let rabbit;
let chicken;
export default class extends Component {
    constructor(props){
        super(props);
        this.state={
            chicken:'',
            rabbit:'',
            foot:'',
            count:'',
        }
    }

    handleCalculator =()=>{
        foot = this.state.foot;
        count = this.state.count;
        rabbit = this.state.rabbit;
        chicken = this.state.chicken;
        if (foot ===''){
            if(count===''){
                count = 1*rabbit + chicken*1;
            }else if(rabbit ===''){
                rabbit = count - chicken;
            }else if(chicken ===''){
                chicken = count -rabbit;
            }
            foot = 4*rabbit + 2*chicken;
        }
        else if (count ===''){
            if(rabbit ===''){
                rabbit = (foot-2*chicken)/4;
            }else if(chicken ===''){
                chicken = (foot-4*rabbit)/2;
            }
            count = 1*rabbit + 1*chicken;
        }
        else if (rabbit ===''){
            rabbit = (foot-2*count)/2;
            chicken = count-(foot-2*count)/2;
        }
        this.setState({chicken:chicken,rabbit:rabbit,foot:foot,count:count});
    };

    onChange =(e,key)=>{
        this.setState({[key]:e})
    };

    render() {
        return(
            <div className='button'>
                <Animal
                    Animaltype='rabbit'
                    Number={this.state.rabbit}
                    onNumberChange={this.onChange}
                />
                <Animal
                    Animaltype='chicken'
                    Number={this.state.chicken}
                    onNumberChange={this.onChange}
                />
                <Animal
                    Animaltype='foot'
                    Number={this.state.foot}
                    onNumberChange={this.onChange}
                />
                <Animal
                    Animaltype='count'
                    Number={this.state.count}
                    onNumberChange={this.onChange}
                />
                <Button type="primary" onClick={this.handleCalculator}>点击</Button>
            </div>
        )
    }
}

