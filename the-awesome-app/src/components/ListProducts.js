import React, {Component, PureComponent} from 'react';
import axios from 'axios';
import './ListProducts.css'
import EditProduct from './EditProduct';
import { trackPromise } from 'react-promise-tracker';
import {connect} from 'react-redux';

class ListProducts extends PureComponent{

    // immutable
    state = {
        products: [],
        selectedProduct: null,
        
    };
    //url = "http://localhost:9000/products";
    editProductRef = React.createRef(null);

    constructor(props){
        super(props);
        this.url = process.env.REACT_APP_PRODUCTS_URL;
        console.log("[ListProducts] constructor");
    }

    async componentDidMount() {

        console.log("[ListProducts] componentDidMount");
        //const url = "http://localhost:9000/products";

        // axios.get(url).then((resp) => {
        //     console.log("success", resp);
        // }, (error) => {
        //     console.log("error", error);
        // });

        this.fetch();

    }

    fetch = async () => {
        try {

            const auth = this.props.auth;
            const headers = {Authorization : `Bearer ${auth.accessToken}`}
            const resp = await trackPromise(axios.get(this.url, {headers: headers}));
            console.log("success", resp);
            this.setState({
                products: resp.data
            });

        }catch(error){

            console.log("error", error);
        }
    }
    delete = async (productId) => {

        const url = this.url + "/" + productId;
        try {
            
            const auth = this.props.auth;
            const headers = {Authorization : `Bearer ${auth.accessToken}`}
            const resp = await trackPromise(axios.delete(url, {headers}));
            ///this.fetch();
            const c_products = [...this.state.products];
            const index = c_products.findIndex(item => item.id === productId);
            
            if(index != -1){
                c_products.splice(index, 1);
                this.setState({
                    products: c_products
                });
            }

            alert("deleted");

        } catch (error) {

            alert("failed to delete");
        }
    }
    edit = (product) => {
        this.setState({
            selectedProduct: product
        });
    }
    editUpdate = async (updatedProduct)=> {
        console.log("editUpdate", updatedProduct);
        try {
            
            const auth = this.props.auth;
            const headers = {Authorization : `Bearer ${auth.accessToken}`}
            const url = this.url + "/" + updatedProduct.id;
            const resp = await trackPromise(axios.put(url, updatedProduct, {headers}));
            this.fetch();
            this.setState({
                selectedProduct: null
            });
        } catch (e) {
            alert("Failed to update");
        }

    }

    editCancel = (message) => {

        console.log("editProductRef", this.editProductRef);
        console.log("editCancel", message);
        // this.setState({
        //     selectedProduct: null
        // });
    }
    renderProducts(){
        return this.state.products.map((item, index) => {

            return (
                <div data-testid="product" className="product" key={item.id}>
                    {/* <p>Product: {item}</p> */}
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <div>
                        <button className="btn btn-danger" onClick={() => {this.delete(item.id)}}>Delete</button>
                            &nbsp; &nbsp;
                        <button className="btn btn-warning" onClick={() => {this.edit(item)}}>Edit</button>
                    </div>
                </div>
            )

        } )
    }

    render() {

        console.log("[ListProducts] render");
        return (
            <div>
                <h3>Products</h3>
                <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.renderProducts()}
                </div>
                <div>
                    {/* <input value={this.state.selectedProduct.id} onChange={this.change } /> */}
                    {this.state.selectedProduct !== null ? 
                        <EditProduct  key={this.state.selectedProduct.id} 
                                    ref={this.editProductRef}
                                    product={this.state.selectedProduct}
                                    onSave={this.editUpdate}
                                    onCancel={this.editCancel}/> : null}
                </div>
            </div>
        )
    }

    componentWillMount(){
        console.log("[ListProducts] componentWillMount");
    }
    componentWillReceiveProps(nxtprops){
        console.log("[ListProducts] componentWillReceiveProps");
    }
    // shouldComponentUpdate(nxtProps, nxtState){
    //     console.log("[ListProducts] shouldComponentUpdate");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListProducts] componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("[ListProducts] componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("[ListProducts] componentWillUnmount");
    }

}
const mapStateToProps = (reduxState) => {

    return {
        auth: reduxState.auth
    }

}


export default connect(mapStateToProps)(ListProducts);