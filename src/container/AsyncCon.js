import { connect } from 'react-redux'
import Async from '../components/Async'


const mapStateToProps = (state) =>{
    return { data : state.payload}
}

const mapDispatchToProps = (dispatch) => {
    return { value : 0}
}

const AsyncCon = connect(mapStateToProps,mapDispatchToProps)(Async)

export default AsyncCon