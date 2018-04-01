import { combineReducers } from 'redux'
import childreducer from './ChildReducer'
import AsyncReducer from './AsyncReducer'


 export default combineReducers({
     childreducer,
     AsyncReducer
})