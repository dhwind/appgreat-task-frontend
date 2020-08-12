import React from 'react';
import { ProductItemOptions } from '../../../redux/reducers/products-page-reducer/products-page-state-interfaces';

interface CartItemProps {
    itemsCount: number;
    item: ProductItemOptions;
    removeFromCart: any;
    setCartItemsCount: any;

}

class CartItem extends React.Component<CartItemProps, {}> {
    render() {
        
        return (<li className="selected-product">
                    <p className="selected-product__count">{this.props.itemsCount}.</p>
                    <img className="selected-product__image" src={this.props.item.image} alt="cart item" />
                    <p className="selected-product__title">{this.props.item.name}</p>
                    <span className="selected-product__border"></span>
                    <p className="selected-product__price">{this.props.item.price}$</p>
                    <div className="selected-product__remove">
                        <button 
                            onClick={() => {
                                                this.props.removeFromCart(this.props.item);
                                                this.props.setCartItemsCount(localStorage.length); 
                                           }
                                            }>&times;</button>
                    </div>
                </li>);
    }
}

export default CartItem;