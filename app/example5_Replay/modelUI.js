import React, {Component} from 'react';
import Replay from './sliderReplay';

export default class extends Component {
    constructor(props){
            super(props);
            this.state = {
                buttonStatus:false,
                sliderMax:100,
                index:0,
                velocity:100,
                value:'1',
            }
        }

    onClick = () =>{
        if(!this.state.buttonStatus && this.state.index >= this.state.sliderMax-1){
            this.setState({buttonStatus:!this.state.buttonStatus ,index:-1},()=>{
                this.onSliderIndex();
            });
        }else {
            this.setState({buttonStatus:!this.state.buttonStatus},()=>{
                if(this.state.buttonStatus){
                    this.onSliderIndex();
                }else {
                    clearInterval(this.timerID);
                }
            });
        }
    };

    // 滑块步进，临界判断
    onSliderIndex  = () =>{
        this.timerID = setInterval(()=>{
            console.log(this.state.index);
                if (this.state.index >= this.state.sliderMax-1) {
                    // this.setState({index: -1});
                    this.setState({buttonStatus: false});
                    clearInterval(this.timerID);
                }else{
                    this.setState({index: this.state.index + 1});
                }
            },200-this.state.velocity
        );
    };

    onChange =(event) =>{
        event.persist();
        console.log(event);
        this.setState({value:event.target.value});
    };

    onIndexChange = (value) =>{
        this.setState({index:value});
    };

    onVelocityChange =(value) =>{
        this.setState({velocity:value});
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.onChange}>
                    <option value='1'>
                        类型1
                    </option>
                    <option value='2'>
                        类型2
                    </option>
                </select>
                <Replay
                    type={this.state.value}                 //'1'代表双滚动条，'2'代表单滚动条
                    buttonStatus={this.state.buttonStatus}  //按钮状态
                    onClick={this.onClick}                  //按钮的点击事件
                    Value={this.state.index}                //目前滑动的值
                    onIndexChange={this.onIndexChange}      //移动滑块的回调
                    sliderMax={this.state.sliderMax}        //移动滑动的最大值
                    velocity={this.state.velocity}          //控制移动速度
                    onVelocityChange={this.onVelocityChange}//速度滑块的回调
                />
            </div>
        )
    }
}