import axios from 'axios'

const url = 'http://rest.learncode.academy/api/reacttest/tweets'
const REQUEST_DATA = (dispatch) => {
    dispatch({ type : 'REQUEST_START'})
    axios.get(url)
        .then((res)=> {
        dispatch({ type : 'RECEIVE_DATA', data : res.data})}
        )
        .catch((err)=> { dispatch({ type : 'ERR', err : err})})
}


export default REQUEST_DATA