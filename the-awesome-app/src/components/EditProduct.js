import React, {Component} from 'react';

class EditProduct extends Component {

    state = {
        currentProduct: null
    };
     
    constructor(props){
        super(props);

        this.state.currentProduct = this.props.product;
        console.log("[EditProduct] constructor");
    }

    componentWillUnmount(){
        console.log("[EditProduct] componentWillUnmount");
    }

    change = (event) => {

        const value = event.target.value;
        const propName =  event.target.name;

        const product = {...this.state.currentProduct};
        product[propName] = value;

        this.setState({
            currentProduct: product
        });

    }

    changePrice = (event) => {

        const value = event.target.value;
        //const propName =  event.target.name;

        const product = {...this.state.currentProduct};
        product.price = value ? parseFloat(value) : value;

        this.setState({
            currentProduct: product
        });

    }
    save = () => {

        if(this.props.onSave){
            this.props.onSave(this.state.currentProduct);
        }
    }
    cancel = () => {
        if(this.props.onCancel){
            this.props.onCancel("Operation cancelled");
        }
    }

    render() {

        const currentProduct = this.state.currentProduct;

        return (
            <div>
                <h4>Edit Product: ID {currentProduct.id}</h4>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" value={currentProduct.name} 
                                                                        onChange={this.change}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" name="description" value={currentProduct.description} onChange={this.change}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" 
                                    value={currentProduct.price} onChange={this.changePrice}/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.save}>Save</button>&nbsp;
                    <button className="btn" onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )

    }

    // static getDerivedStateFromProps(nextProps, currentState){
    //     //return null, if there no state change
    //     // return the new state if stage changes
    //     if(nextProps.product.id !== currentState.currentProduct.id){
    //         return {
    //             ...currentState,
    //             currentProduct : nextProps.product
    //         };
    //     }

    //     return null;
    // }
}

export default EditProduct;