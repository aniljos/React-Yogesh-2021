import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

export const createSetAuthAction = (payload)=> {
    return {
        type: "SET_AUTH",
        payload: payload
    }
}

export const createAddToCartAction = (payload)=> {
    return {
        type: "ADDTOCART",
        payload: payload
    }
}

export const createRemoveCartItemAction = (productId)=> {
    return {
        type: "REMOVECARTITEM",
        productId: productId
    }
}

export const createGetProductsAction = (accessToken) => {
    return async (dispatch) => {
        //api call
        //return an action(object)
        const url = process.env.REACT_APP_PRODUCTS_URL;
        try {
            
          
            const headers = {Authorization : `Bearer ${accessToken}`}
            const response = await trackPromise(axios.get(url, {headers}));
            dispatch({
                type: "GETPRODUCTS",
                payload: response.data
            });

        } catch (err) {
            
        }
    };
}


