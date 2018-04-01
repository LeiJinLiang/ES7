import REQUEST_DATA from '../action/AsyncAction'

const initState = {
    isFetching : false,
    fetched : false,
    payload : [],
    err : null
}

const AsyncReducer = (state = initState, action) => {
    switch (action.type){
        case 'REQUEST_START':{
            return {...state, isFetching: true}
            break;
        }
        case  'RECEIVE_DATA': {
            return {...state, isFetching : false, fetched:true, payload:action.data}
        }
        case 'ERR': {
            return {...state, fetched:true, err : action.err}
        }
    }
    return state
}

export default AsyncReducer