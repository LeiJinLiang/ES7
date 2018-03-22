import React, { Component } from 'react'

import Man from './Man'

import arrayMethod from '../arrayMethods/arrayMethod'

import { _ajax, _filter , _bubble , _reduce1, _reduce_filter} from '../util'

import fetchApi from '../async/async'
import {_reduce} from "../util";

const log = console.log.bind(console)

const tony = new Man();
log(`当前状态${tony}`)
const tt = new arrayMethod()

log('tt',tt)
// var tony = new Man()
// log(`当前状态 ===> ${tony}`)

const url = 'http://rest.learncode.academy/api/reacttest/tweets'


_ajax(url).then((res)=>{
    log('res',res)
})

_filter(['jin','liang','jin','wang','li'])

_bubble([1,5,4,3])


const testAsync = async () => {
    const t = await fetchApi('https://api.douban.com/v2/user/aisk')
}

testAsync();


const _reducetest = _reduce1([[1,2],[3,4]])
log('_reducetest',_reducetest)
const _reducetest2 = _reduce_filter([1,2,1,2,3,5,4,5,3,4,4,4,4]);
log('_reducetest2',_reducetest2)

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count  : 0
        }
    }

    incrementCount =() => {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))


        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

    }

    render(){
        return (
            <div style={{ boxSizing : 'border-box', width : '100%', height : '40px', border : '1px solid', padding : '5px'}}>
                <button onClick = {this.incrementCount}>add</button>
                {this.state.count}
            </div>
        )
    }
}


export default Counter