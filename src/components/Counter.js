import React, { Component } from 'react'

import Man from './Man'

import arrayMethod from '../arrayMethods/arrayMethod'

import { _ajax, _filter , _bubble } from '../util'

import fetchApi from '../async/async'

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
            <div>
                <button onClick = {this.incrementCount}>add</button>
                {this.state.count}
            </div>
        )
    }
}


export default Counter