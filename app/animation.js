import React, {Component} from 'react'
import './css/style.css'

export default class extends Component {
    render() {
        return(
            <div id="wrapper">
                <div style="text-align:center;clear:both">
                </div>
                <div className="card-drop">
                    <a className='toggle' href="#">
                        <i className='icon-suitcase'/>
                        <span className='label-active'>Everyting</span>
                    </a>
                    <ul>
                        <li className='active'>
                            <a data-label="Everyting" href="#"><i className='icon-suitcase'></i> Everyting</a>
                        </li>
                        <li>
                            <a data-label="Design" href="#"><i className='icon-magic'></i> Design</a>
                        </li>
                        <li >
                            <a data-label="UI-UX" href="#"><i className='icon-bolt'></i> UI-UX</a>
                        </li>
                        <li>
                            <a data-label="Print" href="#"><i className='icon-tint'></i> Print</a>
                        </li>
                        <li>
                            <a data-label="Photography" href="#"><i className='icon-camera-retro'></i> Phtography</a>
                        </li>

                    </ul>
                </div>
            </div>

        )
    }
}