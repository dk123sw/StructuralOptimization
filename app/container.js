import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import {proButton} from "./react-redux/action";
import LiftingStat from './example1_LiftingStateUp/calculator'; //状态提升
import Fourth from './example6_MapTrack/four'; //百度地图轨迹
import Fiveth from './example6_MapTrack/five'; //UI测试
import Form from './example2_Form/formlist'; //表单操作
import Asyn from './example3_Asyn/asynchronous'; //异步
import BaiduMap from './example4_BaiduMap/baiduMap'; //百度地图
import Replay from './example5_Replay/modelUI';
import LocalFiles from './example8_localCall/getLocalFiles';
//以下为es6操作
import RegisterStepTwo from './example9_es6Test/es6Grammar'
import Es6setmap from './example9_es6Test/es6_SetandMap'
import Es6promise from './example9_es6Test/es6_Promise'
class Container extends Component{
    render(){
    return(
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={BaiduMap}/>
            </Router>
        </div>
    )}
}

function select(state) {
    return{
        reButton:state.reButton,
    }
}

function dispatchIns(dispatch) {
    return{
        proButton:(content)=>dispatch(proButton(content)),
    }
}

export default connect(select,dispatchIns)(Container);
