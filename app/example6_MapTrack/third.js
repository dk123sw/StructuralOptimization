import React, {Component} from 'react'
import { Slider } from 'antd-mobile';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import DATA from '../DATA.js';
import '../css/map_track.css';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style';

const statusType={stop:0,move:1};
function onFormatDate(date){
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        let minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        let Second =date.getSeconds();
        Second = Second < 10 ? ('0' + Second) : Second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+Second;
    }
const endDate =onFormatDate(new Date());
const beginDate =onFormatDate(new Date(new Date().getTime()-86400000));

export default class extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
            buttonStatus:'caret-right',
            velocity:100,
            beginTime:beginDate,
            endTime:endDate,
        }
    }
    
    onTime = key =>(value) =>{
        console.log(key + '' + value);
        this.setState({[key]: value});
    };

    onClick = () =>{
        if (this.props.status===statusType.stop){
            this.onJudgeDate(this.state.beginTime ,this.state.endTime);
        }else {
             this.setState({buttonStatus:'caret-right'});
            this.props.onStatusChange(statusType.stop);
        }
    };
    //判断日期是否可用
    onJudgeDate(beginTime ,endTime){
        console.log(new Date(beginTime).getTime() + '  ' + new Date(endTime).getTime());
        if(beginTime ===0 || endTime===0){
           alert('请输入有效时间');
        }else{
            if(new Date(endTime).getTime()-new Date(beginTime).getTime() <= 86400000){
                this.props.onChoiceTime(beginTime ,endTime);
                this.setState({buttonStatus:'pause'});
                this.props.onStatusChange(statusType.move);
            }else {
                alert('时间跨度要小于24小时哦');
            }
        }
    };

    onChange =(value) =>{
        this.props.onVelocityChange(value)
    };

    onIndexChange = (value) =>{
        console.log(value);
        this.props.onIndexChange(value);
    };

    onDisabledDate = (current) =>{
        let dateNow = new Date();
        return current> dateNow;
    };

    render() {
        const Time =this.props.index!==-1?this.props.index:DATA.position.length;
        console.log('渲染'+Time);
        return(
            <div>
                <div id='proTime'>
                    <DatePicker
                        style={{marginLeft:10}}
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder={beginDate}
                        onChange={this.onTime('beginTime')}
                        onOk={this.onTime('beginTime')}
                        disabledDate={this.onDisabledDate}
                    />
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder={endDate}
                        onChange={this.onTime('endTime')}
                        onOk={this.onTime('endTime')}
                        disabledDate={this.onDisabledDate}
                    />
                </div>
                <span className='first' style={{position:'absolute', left:0 ,bottom:0, width:'22%', height: '12vh'}}>
                    <Button type='primary'
                            shape='circle'
                            icon={this.props.status===statusType.move?'pause':'caret-right'}
                            onClick={this.onClick}
                            htmlType='button'
                            className='click_button'
                            size='small'
                            style={{marginLeft:'3vh' , marginTop:'3vh'}}
                    />
                </span>
                <span className='second' style={{position:'absolute' , left:'22%',bottom:0 ,width:'78%' ,height:'12vh'}}>
                    <Slider
                        style={{height:'6vh' ,marginTop:'3vh',marginRight:'10px'}}
                        defaultValue={0}
                        min={0}
                        max={DATA.position.length-2}
                        value={Time}
                        onChange={this.onIndexChange}
                        trackStyle={{
                            height: '5px',
                        }}
                        railStyle={{
                            height: '5px',
                        }}
                    />
                    <span style={{position:'absolute' ,bottom:'3vh' ,lineHeight:0.1 }}>速度:</span>
                    <Slider
                        style={{ marginLeft: 30, marginRight: 30,width: 100 ,height:'6vh'}}
                        min={0}
                        max={200}
                        disabled={this.props.status===statusType.move}
                        value={this.props.velocity}
                        onChange={this.onChange}
                        trackStyle={{
                            height: '5px',
                        }}
                        railStyle={{
                            height: '5px',
                        }}
                        />
                </span>
            </div>
        )
    }
}