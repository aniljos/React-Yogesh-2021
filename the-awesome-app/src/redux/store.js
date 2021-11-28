//redux


import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//initial state
const authState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}
const cartState = {
    cart : [],
    products: []
}
//reducer -- Has to be Synchronous functions
const authReducer = (currentState=authState, action)=> {

    if(action.type === "SET_AUTH"){
        return {
            ...action.payload
        }
    }
    return currentState;
}
const cartReducer = (currentState=cartState, action)=> {

    if(action.type === "ADDTOCART"){

        const cart = [...currentState.cart];
        cart.push(action.payload);
        return {

            ...currentState,
            cart: cart
        };
    }
    if(action.type === "REMOVECARTITEM"){

        const cart = [...currentState.cart];
        const index = cart.findIndex(item => item.product.id === action.productId);
        if(index !== -1){
            cart.splice(index, 1);
        }
        return {
            ...currentState,
            cart: cart
        };
    }
    if(action.type === "GETPRODUCTS"){

        return {
            ...currentState,
            products: action.payload
        }
    }
    return currentState;
}

//middleware

const logMiddleware = (store) => {
    return (next) => { 
        return (action) => {
            console.log("Prev State", store.getState());
            console.log("Action", action);
            const result = next(action);
            console.log("Updated State", store.getState());
            return result;
        }
    }
}


//store
// export const store = createStore(authReducer, 
//                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore(combineReducers({auth: authReducer, cart: cartReducer}), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export  const store = createStore(
//                         combineReducers({auth: authReducer, cart: cartReducer}), 
//                         applyMiddleware(logMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export  const store = createStore(
                        combineReducers({auth: authReducer, cart: cartReducer}), 
                        composeEnhancers(applyMiddleware(logMiddleware, thunk)));