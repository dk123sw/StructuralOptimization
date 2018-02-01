import BMap from 'BMap';
import React, {Component} from 'react';
import DATA from '../DATA.js';
import wheel from './/wheel.png';

let map;
let point;
let carMk;
let track;
let point1 = [];
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        map = new BMap.Map('map_canvas');
        point = new BMap.Point(117.148081, 36.692082);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);

        //BMap.Polyline 创建折线覆盖物对象
        for (let i = 0; i < DATA.position.length; i++) {
            point1[i] = new BMap.Point(DATA.position[i].lng, DATA.position[i].lat);
        }
        //根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
        map.setViewport(point1);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    componentDidUpdate(){
        if(this.props.index !==-1){
        //如果目前为移动状态且检索值不为-1(防止图标在移动到终点时自动跳到起点)
                this.drawOneLine(this.props.index);
        }else{
            // dataValue =[];
            // this.drawOneLine(DATA.position.length-1);
        }
    }
    drawOneLine(index) {
        console.log(index);
        map.removeOverlay(track);
        track = new BMap.Polyline(point1.slice(0,index+1), {strokeColor: '#108ee9'});
        map.addOverlay(track);
        map.removeOverlay(carMk);
        let myIcon = new BMap.Icon( wheel , new BMap.Size(48, 48), {    //小车图片
            //offset: new BMap.Size(0, -5),    //相当于CSS精灵
            // imageOffset: new BMap.Size(0, 10)    //图片的偏移量。为了使图片底部中心对准坐标点。
        });
        carMk = new BMap.Marker(point1[index], {icon: myIcon});
        map.addOverlay(carMk);
    }

    render() {
        console.log('渲染');
        return (
            <div>
                <div id="map_canvas" style={{width: '100%', height: '88vh', overflow: 'hidden'}}/>
            </div>
        )
    }
}