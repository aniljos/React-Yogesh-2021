console.log("Redux demo");

//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

//initState
const initState={
    count: 5,
    message: "Hello Redux"
}

//reducer
const reducer = (currentState=initState, action) => {

    //return the updated state

    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...currentState,
            count: action.value
        }
    }
    

    return currentState;
}

//create store
const store = createStore(reducer);
console.log("State", store.getState());

//subscribe to the store

store.subscribe(() => {
    console.log("In Subscribe", store.getState());
})

//dispatch an action

store.dispatch({
    type: "INC_CTR"
})
//console.log("State", store.getState());
store.dispatch({
    type: "DECR_CTR"
})
//console.log("State", store.getState());

store.dispatch({
    type: "UPD_CTR", value: 15
})
//console.log("State", store.getState());