import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import coreData from './app/reducer'
import Container from './app/container'
import First from './app/myTest/frist';
import Second from './app/myTest/second';
import Fourth from './app/myTest/four';
import Calculator from './app/example1_LiftingStateUp/calculator';
require('./app/css/map_track.css');
// import 'antd/dist/antd.css';

let store = createStore(coreData);
function App () {
    return(
        <Provider store={store}>
            <Container/>
        </Provider>
    )
}
function render () {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
render();