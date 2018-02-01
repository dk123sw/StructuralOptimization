import React, {Component} from 'react';
import { Slider } from 'antd-mobile';
require('./replay.css');

const PlayButton = require('./play-circle-fill.png');
const PauseButton = require('./pause-circle-fill.png');
let SliderFName,SliderSName;
class Replay extends Component {
    constructor(props){
            super(props);
            this.state ={
                sliderMax:100, //滑动的总长度
                index:0, //目前滑动到的值
                velocity:100 //控制移动速度
            }
        }

    onIconChange = () =>{
        if(this.props.buttonStatus === false){
            return PlayButton;
        }else if(this.props.buttonStatus === true){
            return PauseButton;
        }
    };

    onIndexChange = (value) =>{
        // console.log(value);
        this.props.onIndexChange(value);
    };

    onVelocityChange =(value) =>{
        this.props.onVelocityChange(value)
    };

    render() {
        if ('type' in this.props && this.props.type ==='2'){
            SliderFName='replay_slider_only';
            SliderSName='replay_slider_none';
        }else {
            SliderFName='replay_slider_first';
            SliderSName='replay_slider_second';
        }
        return(
            <div id='replay'>
                <div id='replay_button'>
                    <img
                        src={this.onIconChange()}
                        onClick={this.props.onClick}
                    />
                </div>
                <div id='replay_slider'>
                    <Slider
                        className={SliderFName}
                        defaultValue={0}
                        min={0}
                        max={'sliderMax' in this.props?this.props.sliderMax:100}
                        value={this.props.value}
                        onChange={this.onIndexChange}
                        trackStyle={{
                            height: '5px',
                        }}
                        railStyle={{
                            height: '5px',
                        }}
                    />
                    <Slider
                        className={SliderSName}
                        min={0}
                        max={200}
                        disabled={this.props.buttonStatus===true}
                        value={this.props.velocity}
                        onChange={this.onVelocityChange}
                        trackStyle={{
                            height: '5px',
                        }}
                        railStyle={{
                            height: '5px',
                        }}
                    />
                </div>
            </div>
        )
    }
}
export default Replay