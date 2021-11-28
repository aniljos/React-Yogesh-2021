import { useEffect, useState } from "react";
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';

import { createAddToCartAction, createGetProductsAction } from "../redux/action-creators";
import { useSnackbar } from 'notistack';

function GadgetShop(){

    //const [products, setProducts] = useState([]);
    const [values, setValues] = useState(Array(10).fill(1));
    const products = useSelector(state => state.cart.products)
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {

        //fetch();
        fetchFromStore();

    }, []);

    function fetchFromStore(){

        dispatch(createGetProductsAction(auth.accessToken));
    }

    async function fetch(){
        const url = process.env.REACT_APP_PRODUCTS_URL;
        try {

            const resp = await axios.get(url);
            console.log(resp);
            //setProducts(resp.data);
            

        } catch (error) {
            console.log("error", error);
        }
    }
    
    function setQuantity(e, index){

        const updatedValues = [...values];
        updatedValues[index] = e.target.value;
        setValues(updatedValues);
    }
    function addToCart(product, index){

        console.log("addtocart", product, values[index]);
        // dispatch({
        //     type: "ADDTOCART",
        //     payload: {product: product, quantity: values[index]}
        // });
        dispatch(createAddToCartAction( {product: product, quantity: values[index]}));
        //alert("Added to cart");
        enqueueSnackbar(`Added ${product.name} to the cart`, {variant: 'success'});

    }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <input className="form-control" 
                                        type="number" placeholder="Quantity" 
                                        value={values[index]}
                                        onChange={(e) => setQuantity(e, index)}/> 

                            <button href="#" className="btn btn-primary" 
                                                    onClick={() => addToCart(item, index)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return (
        <div>
            <h4>Gadget Store</h4>
            {renderProducts()}

        </div>
    )
}

export default GadgetShop;