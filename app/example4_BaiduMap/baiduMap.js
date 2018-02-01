import React, {Component} from 'react'
import BMap from 'BMap';
import {ActionSheet} from 'antd-mobile';
import Icon from './expand.png';
import DATA from '../DATA';
import './expand.css';

let imgId = 'expand';
let map,point ,wrapProps,ArrayPoint=[];
const BUTTONS = ['添加图标', '添加信息窗口', '绘制轨迹', '添加控件', '取消'];
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
let Adress={lng: 117.148081 ,lat:36.692082};
export default class extends Component {
    constructor(props){
            super(props);
            this.state ={
                refresh:false,
                clicked:'',
            }
        }

    componentDidMount() {
        map = new BMap.Map('map_canvas');
        point = new BMap.Point(Adress.lng , Adress.lat);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
    }

    onMapFunction =(index) =>{
        switch (index){
            case 0:
                this.addIcon(); //添加图标
                break;
            case 1:
                this.addInfoWindow();//添加信息窗口
                break;
            case 2:
                this.onDrawTrack();//绘制轨迹
                break;
            case 3:
                this.addControl();//添加控件
                break;
        }
    };

    addIcon =() =>{
        let myIcon = new BMap.Icon(Icon , new BMap.Size(48 ,48));
        let marker = new BMap.Marker(point , {icon:myIcon});
        map.addOverlay(marker);
    };

    addInfoWindow =() =>{
        const content = 'content';
        let opts ={
            width: 0,
            height:0,
            title:'title',//信息窗口标题
        };
        let infoWindow = new BMap.InfoWindow(content , opts);
        map.openInfoWindow(infoWindow , point);
    };

    onDrawTrack = () =>{
        for(let i=0 ;i<DATA.position.length;i++){
            ArrayPoint[i] = new BMap.Point(DATA.position[i].lng , DATA.position[i].lat);
        }
        //ArrayPoint并不是一个数组,是Point的实例对象(使用数组是无法生成轨迹的)
        let track = new BMap.Polyline(ArrayPoint, {strokeColor: '#108ee9'});
        map.addOverlay(track);
        map.setViewport(ArrayPoint);
        let myIcon = new BMap.Icon(Icon , new BMap.Size(48, 48), {    //小车图片
            //offset: new BMap.Size(0, -5),    //相当于CSS精灵
            // imageOffset: new BMap.Size(0, 10)    //图片的偏移量。为了使图片底部中心对准坐标点。
        });
        let i = 0;
        this.timerID = setInterval(() => {
            if(i < ArrayPoint.length){
                map.removeOverlay(this.carMk);
                this.carMk = new BMap.Marker(ArrayPoint[i] , {icon: myIcon});
                map.addOverlay(this.carMk);
            }
            i++;
        },100);

    };

    addControl =() =>{
        let opts = {
            anchor:BMAP_ANCHOR_BOTTOM_LEFT,
            offset: new BMap.Size(10, 10), //此偏移量是由左下角建立的坐标系
        };
        map.addControl(new BMap.NavigationControl(opts));
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    onExpandClick =() =>{
        if(this.state.refresh){
            imgId='expand-end'
        }else {
            imgId='expand-begin';
        }
        this.setState({refresh:!this.state.refresh});

        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                // title: 'title',
                message: '功能列表',
                maskClosable: true,
                'data-seed': 'logId',
                wrapProps,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
                this.onMapFunction(buttonIndex);
            });
    };

    render() {
        return(
            <div>
                <div id="map_canvas" style={{width: '100%', height: '90vh', overflow: 'hidden'}}/>
                <img id={imgId} src={require('./expand.png')} onClick={this.onExpandClick}/>
            </div>
        )
    }
}