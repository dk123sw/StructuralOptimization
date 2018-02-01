import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import coreData from './app/reducer'
import Container from './app/container'
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