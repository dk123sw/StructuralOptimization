import React, {Component} from 'react'
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style';

export default class extends Component {
    constructor(props){
            super(props);
            this.state={
                beginTime:0,
                endTime:0,
            }
        }
    beginTime = (value) =>{
        console.log(value);
        this.setState({beginTime: new Date(value._d).getTime()});
    };

    endTime = (value) =>{
        console.log(value);
        this.setState({endTime: new Date(value._d).getTime()});
    };

    onClick =() =>{
        if(this.state.beginTime < (new Date().getTime()-86400) || this.state.endTime < (new Date().getTime()-86400)){
            alert('只能访问有效期24小时内的轨迹');
        }
        this.props.onChoiceTime(this.state.beginTime , this.state.endTime);
    };
    //只有时间改变的时候渲染
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.beginTime !==nextState.beginTime || this.state.endTime !==nextState.endTime){
    //         return true
    //     }else
    //         return false
    // }

    disabledDate = (current) =>{
        let dateNow = new Date();
        console.log(current +"   "+(new Date().getTime()-86400));
        return current> dateNow;
    };


    render() {
        console.log('渲染');
        return(
            <div>
                <DatePicker
                    style={{marginLeft:10}}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="开始时间"
                    onChange={this.beginTime}
                    onOk={this.beginTime}
                />
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="结束时间"
                    onChange={this.endTime}
                    onOk={this.endTime}
                />
                <button
                    style={{height:28 ,width:32}}
                    onClick={this.onClick}>
                    确定
                </button>
            </div>
        )
    }
}