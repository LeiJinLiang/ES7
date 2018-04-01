import React, { Component } from 'react'

class Child extends Component {
    constructor(props){
        super(props)
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        console.log('---------update');
        return(
            <h1>hhhhhh</h1>
        )
    }
}

export default Child