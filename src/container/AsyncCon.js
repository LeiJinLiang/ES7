import { connect } from 'react-redux'
import Async from '../components/Async'
import REQUEST_DATA from '../action/AsyncAction'


const mapStateToProps = (state) =>{
    console.log('=====',state)
    return { data : state.AsyncReducer.payload}
}

const mapDispatchToProps = (dispatch) => {
    return { ajax : url => dispatch(REQUEST_DATA,url)}
}

const AsyncCon = connect(mapStateToProps,mapDispatchToProps)(Async)

export default AsyncCon