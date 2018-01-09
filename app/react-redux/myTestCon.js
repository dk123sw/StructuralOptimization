import React, {Component} from 'react'
import {connect} from 'react-redux';
import First from '../myTest/frist';
import {proButton,proValue} from "./action";

function select(state) {
    return{
        reButton:state.reButton,
        reValue:state.reValue,
    }
}

function dispatchIns(dispatch) {
    return{
        proButton:(content)=>dispatch(proButton(content)),
        proValue:(content)=>dispatch(proValue(content)),
    }
}

export default connect(select,dispatchIns)(First);
