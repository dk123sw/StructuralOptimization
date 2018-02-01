import React, {Component} from 'react'

function ComplexPromise() {
    console.log('执行顺序1');

    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() =>{ resolve(p1) ; console.log('执行顺序4');}, 1000);
        console.log('执行顺序2');
    });

    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() =>{resolve('p1异步执行完') ; console.log('执行顺序5');}, 3000);
        console.log('执行顺序3');
    });

    p2
        .then(result => {console.log(result +'执行顺序6') ; return '链式执行'})
        .then(result => console.log(result+'执行顺序7'));
}

export default class extends Component {
    constructor(props){
            super(props);
            this.state = {
                refresh:true,
            }
        }

    PromiseOperatopn =() =>{
        let mythis =this;
        let promise = new Promise(function(resolve, reject) {
            console.log('Promise');
            let value = 'resolved';
            if(mythis.state.refresh ===true){
                resolve(value);
            }else {
                reject('failure')
            }

        });
        promise.then((value) =>{
            console.log(value);
            alert('执行成功的操作')
        });
        promise.catch((value)=>{
            console.log(value);
            alert('执行失败的操作')
        });
        //在执行异步操作之前会先执行完同步操作
        console.log('Hi!');
    };

    onClick = () =>{
        this.setState({refresh:!this.state.refresh});
        this.PromiseOperatopn();
    };

    render() {
        const Operation = !this.state.refresh?'异步操作成功':'异步操作失败';
        return (
            <div>
                <p>Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。</p>
                <p>Promise特点:1.对象的状态不受外界影响2.一旦状态改变，就不会再变，任何时候都可以得到这个结果</p>
                <br/>
                <p>使用Promise时把不需要等待异步结果的写在Promise外边，把需要根据操作结果在执行的操作写在then,catch里</p>
                <button onClick={this.onClick}>{Operation}</button>
                <br/>
                <br/>
                <br/>
                <p>可以在异步操作返回值中返回其他异步操作，这样可以实现让一个异步操作等待另一个异步操作结束再去执行，另外Promise
                实例是链式调用，可以再then之后再使用then(执行完一个操作后再去执行下个操作){ComplexPromise()}</p>
            </div>
        )
    }
}