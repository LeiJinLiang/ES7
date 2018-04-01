import React, { Component } from 'react'

class Async extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { data } =this.props
        return(<div>
            <ul>
                {data.map((item,idx)=>(
                    <li key = {idx}><strong>{item.id}</strong></li>
                ))}
            </ul>
        </div>)
    }
}


export default Async