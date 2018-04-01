import React, { Component } from 'react'

class Async extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log('this.props',this.props)
        return(<div>
            Async
        </div>)
    }
}


export default Async