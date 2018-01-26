import React, {Component} from 'react'
import http from '../react-redux/http'

export default class extends Component {
    constructor(props){
            super(props);
            this.state={

            }
        }

    componentWillMount() {
        let mythis = this;
        http.get('?key=&type=2&fgcolor=00b7ee&w=90&m=5&text=hello%20world!')
            .then(function (data) {
                if (data.success) {

                } else {
                    alert('')
                }
                ;
            }).catch(function (err) {
            alert(err);
        })
    }

    render() {
        return(
            <p3>ceshi???</p3>
        )
    }
}