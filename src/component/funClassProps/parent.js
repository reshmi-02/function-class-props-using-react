import React from 'react'
import Child  from './child.js'

const Parent =()=>{
    let x="props"
    let a=20;
    let obj={
        age:20
    }
    let arr=[1,2,3]
    let arrobj=[
        {
            name:"resh",
            age:23
        },
        {
            name:"pree",
            age:24
        }
    ]
    return(
        <div>
            <h1>Function to class component</h1>
            <Child name={x} age={a} obj={obj} arr={arr} arrobj={arrobj}/>
        </div>
    )
}

export default Parent