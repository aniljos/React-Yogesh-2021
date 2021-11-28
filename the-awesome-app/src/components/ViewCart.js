import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createRemoveCartItemAction } from '../redux/action-creators';

class ViewCart extends PureComponent {

    remove = (prdId) => {

        this.props.removeCartItem(prdId);
    }

    render() {

        return (
            <div>
                <h3>Cart</h3>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {this.props.cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" 
                                                onClick={() => this.remove(item.product.id)}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

//map the redux state to the component props
const mapStateToProps = (reduxState) => {

    return {
        cart: reduxState.cart.cart,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        //removeCartItem: (id) => {dispatch({type: "REMOVECARTITEM", productId: id })}
        removeCartItem: (id) => {dispatch(createRemoveCartItemAction(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
//export default ViewCart;