import React, {Component} from 'react'
import { Slider } from 'antd-mobile';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import DATA from '../DATA.js';
import '../css/map_track.css'

const statusType={stop:0,move:1};
export default class extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
            buttonStatus:'caret-right',
            velocity:100,
        }
    }

    onClick = () =>{
        if (this.props.status===statusType.stop){
             this.setState({buttonStatus:'pause'});
            this.props.onStatusChange(statusType.move);
        }else {
             this.setState({buttonStatus:'caret-right'});
            this.props.onStatusChange(statusType.stop);
        }
    };

    onChange =(value) =>{
        this.props.onVelocityChange(value)
    };

    onIndexChange = (value) =>{
        console.log(value);
        this.props.onIndexChange(value);
    };

    render() {
        const Time =this.props.index!==-1?this.props.index:DATA.position.length;
        console.log('渲染'+Time);
        return(
            <div>
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