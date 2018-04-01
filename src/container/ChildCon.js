import React from 'react'
import { connect } from 'react-redux'
import Child from '../components/Child'
import INREMENT_VALUE from '../action/ChildAction'

const mapStateToProps = (state) => {
     return { value : state.value }
}

const mapDispatchToProps = (dispatch) => {
    return {
         add : ()=> dispatch(INREMENT_VALUE)
    }
}

const ChildCon = connect(mapStateToProps,mapDispatchToProps)(Child)

export default ChildCon

