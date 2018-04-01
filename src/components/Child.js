import React, { Component } from 'react'

class Child extends Component {
    constructor(props){
        super(props)
    }

    handleClick =() => {
        console.log('=========')
        this.props.add()
    }

    render() {
        console.log('this.props',this.props)
        return(
            <main>
                    <h1>{this.props.value}</h1>
                    <button onClick = {this.handleClick}>+</button>
            </main>
        )
    }
}

export default Child