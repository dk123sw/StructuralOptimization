import React, {Component} from 'react'
import {connect} from 'react-redux';
import Test from '../example7_reduxTest/reduxTest';
import {proButton,proValue} from "./action";

function select(state) {
    return{
        reButton:state.reButton,
        // reValue:state.reValue,
    }
}

function dispatchIns(dispatch) {
    return{
        proButton:(content)=>dispatch(proButton(content)),
        // proValue:(content)=>dispatch(proValue(content)),
        // addValue:(content)=>dispatch(addValue(content)),
        // delValue:(content)=>dispatch(delValue(content)),
    }
}

export default connect(select,dispatchIns)(Test);
