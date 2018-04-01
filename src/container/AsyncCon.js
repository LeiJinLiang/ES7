import React, { Component } from 'react'
import { connect } from 'react-redux'
import Async from '../components/Async'
import REQUEST_DATA from '../action/AsyncAction'

class AsyncContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.ajax()
    }

    render(){
        return(
            <div>
               <Async data = {this.props.data}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return { data : state.AsyncReducer.payload}
}

const mapDispatchToProps = (dispatch) => {
    return { ajax : url => dispatch(REQUEST_DATA,url)}
}


const AsyncCon = connect(mapStateToProps,mapDispatchToProps)(AsyncContainer)

export default AsyncCon