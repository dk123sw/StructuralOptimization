import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import {proButton} from "./react-redux/action";
import Fourth from './myTest/four';

class Container extends Component{
    render(){
    return(
    <div>
        <Router history={hashHistory}>
            <Route path="/" component={Fourth}/>
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
