import React from 'react';
import { ProductItemOptions } from './../../../redux/reducers/products-page-reducer/products-page-state-interfaces';
import cartImage from './../../../assets/images/shopping-cart.svg';

interface ProductItemProps {
    product: ProductItemOptions;
    setCartItemsCount: any;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render() {
        return (<li className="products-list__item">
            <img className="products-list__item__image" src={this.props.product.image} alt="product" />
            <div className="products-list__item__panel">
                <div className="products-list__item__panel__name">
                    <p>{this.props.product.name}</p>
                </div>
                <div className="products-list__item__panel__buy" 
                     onClick={() => {
                                        localStorage.setItem(String(this.props.product.id), this.props.product.name);
                                        this.props.setCartItemsCount(localStorage.length);
                                    }}>
                    <img src={cartImage} alt="shopping-cart" />
                </div>
            </div>
        </li>);
    }
}

export default ProductItem;