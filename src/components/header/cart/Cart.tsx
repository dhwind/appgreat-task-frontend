import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { ProductItemOptions } from '../../../redux/reducers/products-page-reducer/products-page-state-interfaces';
import { addToCart, removeFromCart, setTotalPrice, toggleCartActivity, setCartItemsCount } from '../../../redux/reducers/header-reducer/header-reducer';
import { placeOrder } from '../../../redux/reducers/orders-page-reducer/orders-page-reducer';
import { NavLink } from 'react-router-dom';
import { CartOptions } from '../../../redux/reducers/header-reducer/header-state-interfaces';

interface CartProps {
    productsData: Array<ProductItemOptions>;
    cartItems: Array<ProductItemOptions>;
    totalPrice: number;
    cart: CartOptions;
    toggleCartActivity: any;
    setCartItemsCount: any;
    addToCart: any;
    removeFromCart: any;
    setTotalPrice: any; 
    placeOrder: any;
}

class Cart extends React.Component<CartProps, {}> {

    componentDidUpdate() {
        
        this.props.productsData.forEach(productItem => {
            if(localStorage.getItem(String(productItem.id))) {
                this.props.addToCart(productItem);
            }
        });

    }

    createCartItems(): Array<JSX.Element> { //creating items at Cart
        let itemsCount = 0;
        let result = this.props.cartItems.map(item => {
            itemsCount++;
            return <CartItem setCartItemsCount={this.props.setCartItemsCount} itemsCount={itemsCount} key={item.id} item={item} removeFromCart={this.props.removeFromCart} />
        });
        return result;
    }

    render() {

        return (
            <div className="cart-modal-window" style={this.props.cart.isActive === true ? { display: "flex" } : { display: "none" } }>
                <div className="cart-modal-window__cart">
                    <p className={`cart-modal-window__cart__empty ${this.props.cart.cartItems.length === 0 ? "" : "cart-modal-window__cart__empty__inactive"}`}>Your cart is empty</p>
                    <span 
                        className="cart-modal-window__cart__close" 
                        onClick={() => this.props.toggleCartActivity(false)}>
                        &times;
                    </span>
                    <ul className="product-field">
                        {this.createCartItems()}
                    </ul>
                    <p className={`cart-modal-window__cart__total-price ${this.props.cart.cartItems.length === 0 ? "cart-modal-window__cart__total-price__inactive" : ""}`}>Total price: {this.props.totalPrice.toFixed(2)}$</p>
                    <NavLink to="/orders">
                        <button 
                            onClick={() => 
                                            {
                                                this.props.placeOrder(this.props.cartItems, this.props.totalPrice.toFixed(2));
                                                this.props.toggleCartActivity(false);
                                            }
                                    } 
                                    className={`cart-modal-window__cart__place-order 
                                                ${this.props.cart.cartItems.length === 0 ? "cart-modal-window__cart__place-order__inactive" : ""}`}
                                >Place Order</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

const mapToStateProps = (state: any) => ({
    productsData: state.productsPage.productsItems,
    cartItems: state.header.cart.cartItems,
    totalPrice: state.header.cart.totalPrice,
    cart: state.header.cart
});

export default connect(mapToStateProps, { addToCart, removeFromCart, setTotalPrice, placeOrder, toggleCartActivity, setCartItemsCount })(Cart);