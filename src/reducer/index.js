


const initState = {
    value : 0
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case "INREMENT_VALUE":{
            return {...state, value : state.value +1}
        }
    }
    return state
}

export default reducer