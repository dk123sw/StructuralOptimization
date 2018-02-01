import React, {Component} from 'react'


//Set成员赋值
function initSet(){
    //方法1
    let set1 = new Set([1,1,1,2,3,'2']);
    console.log('set1赋值'+[...set1]);
    //方法2
    let set2 = new Set();
    [2,3,4,5,5].forEach(x => set2.add(x));

    let index = 0 ,a=[];
    for(let i of set2){
        a[index] =i;
        index++
    }
    console.log('set2赋值'+a);
    return {
        first:[...set1],
        second:a,
    }
}

//Set实例的属性和方法
function Property() {
    let set3 = new Set();
    set3.add(1).add(2).add(3).add('3');//添加
    let IsHave = set3.has(2);//检索
    console.log('是否存在'+(IsHave?'存在':'不存在'));
    let IsDelet = set3.delete(2);//删除
    console.log('成员总数' + set3.size +'是否删除:'+(IsDelet?'删除':'未删除'));
    let IsHave1 = set3.has(2);
    console.log([...set3]+'是否存在'+(IsHave1?'存在':'不存在'));
    set3.clear(); //清除所有成员，没有返回值
}

//Set数组去重
function dedupe(array) {
    return Array.from(new Set(array));
}

//Set交集、并集和差集
function Use() {
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

// 并集
    let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
    let difference = new Set([...a].filter(x => !b.has(x)));
}

//Map 赋值、属性及方法
function MapInit() {
    //Map可以通过set一个个赋值，也可以将整个数组做参数（具有 Iterator 接口、且每个成员都是一个双元素的数据结构都可以当作Map构造函数的参数）
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    map.set('o', 'content');
    const Number = map.size; // 2
    map.has('name'); // true 判断键名
    map.get('name'); // "张三" 由键名获取键值
    map.has('title'); // true 判断
    map.get('title'); // "Author"
    map.delete('o'); //删除某个
    map.clear(); //清除所有
}

//Map 遍历
function MapTraverse() {
    const map = new Map([
        ['F', 'no'],
        ['T',  'yes'],
    ]);

    for (let key of map.keys()) {
        console.log(key);
    }
// "F"
// "T"
    for (let value of map.values()) {
        console.log(value);
    }
// "no"
// "yes"
    for (let [key, value] of map.entries()) {
        console.log(key, value);
    }
// "F" "no"
// "T" "yes"

}

export default class extends Component {
    constructor(props){
            super(props);
            this.state = {
                refresh:true,
            }
        }

    componentDidUpdate(){
        //测试获取到的Dom节点
        let test = document.getElementById('dk');
        console.log(test);
    }

    onClick = () =>{
        this.setState({refresh:!this.state.refresh});
    };

    render() {
        const Array = [1,1,2,2,3,4,5];
        return(
            <div>
                <p>Set类似于数组，但是成员的值都是唯一的，没有重复的值</p>
                <p>{'数组1：'+initSet().first + '   '+'数组2：'+initSet().second}</p>
                <p>属性方法{Property()}</p>
                <p>{'数组去重:'+dedupe(Array)}</p>
                <br/>
                <br/>
                <br/>
                <p>Map是键值对的数据结构</p>
                <p>Map属性及方法{MapInit()}</p>
                <p id='dk'>Map遍历{MapTraverse()}</p>
                <p>Map可与其他数据类型互相转换(数组、对象、JSon等)</p>
                <button type='input' onClick={this.onClick}>test</button>
            </div>
        )
    }
}