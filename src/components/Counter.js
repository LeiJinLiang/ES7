import React, { Component } from 'react'

import Man from './Man'


const log = console.log.bind(console)

const tony = new Man();
log(`当前状态${tony}`)

// var tony = new Man()
// log(`当前状态 ===> ${tony}`)

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