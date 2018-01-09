import React, {Component} from 'react'
import { List, InputItem } from 'antd-mobile';

export default class extends Component {
    constructor(props){
        super(props);
    }

    handleChange=key=>(e)=>{
        this.props.onNumberChange(e , key);
    };

    render() {
        let AnimalName;
        switch (this.props.Animaltype) {
            case 'rabbit':
                AnimalName='兔子的数量';
                break;
            case 'chicken':
                AnimalName='鸡的数量';
                break;
            case 'foot':
                AnimalName='脚的数量';
                break;
            case 'count':
                AnimalName='动物数量';
                break;
        }

        const Number =this.props.Number;
        const Animaltype = this.props.Animaltype;
        return(
            <div>
                <List>
                    <InputItem
                        value={Number}
                        onChange={this.handleChange(Animaltype)}
                    >
                        {AnimalName}
                    </InputItem>
                </List>
            </div>
        )
    }
}
