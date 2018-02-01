import React,{Component} from 'react';
import ReactDom from 'react-dom';
import '../css/style.css'

export default class extends Component{
    constructor(props){
            super(props);
        }





    render(){
        const Animation = [<div id="wrapper">
            <div style={{textAlign:'center' , clear:'both'}}>
            </div>
            <div className="card-drop">
                <a className='toggle' href="#" >
                    <i className='icon-suitcase'/>
                    <span className='label-active'>Everyting</span>
                </a>
                <ul>
                    <li className='active' key={'1'}>
                        <a data-label="Everyting" href="#"><i className='icon-suitcase'/> Everyting</a>
                    </li>
                    <li key={'2'}>
                        <a data-label="Design" href="#"><i className='icon-magic'/> Design</a>
                    </li>
                    <li key={'3'}>
                        <a data-label="UI-UX" href="#"><i className='icon-bolt'/> UI-UX</a>
                    </li>
                    <li key={'4'}>
                        <a data-label="Print" href="#"><i className='icon-tint'/> Print</a>
                    </li>
                    <li key={'5'}>
                        <a data-label="Photography" href="#"><i className='icon-camera-retro'/> Phtography</a>
                    </li>

                </ul>
            </div>
        </div>];
        return(
            <div>
                {Animation}
            </div>
        )
    }
}

