import React from 'react';
import ProductItem from './product-item/ProductItem';
import { connect } from 'react-redux';
import { ProductItemOptions } from '../../redux/reducers/products-page-reducer/products-page-state-interfaces';
import { setCartItemsCount } from '../../redux/reducers/header-reducer/header-reducer';

interface ProductsPageProps {
    productsItems: Array<ProductItemOptions>;
    setCartItemsCount: any;
}

class ProductsPage extends React.Component<ProductsPageProps, {}> {

    componentDidMount() {
        document.title = "Products page";
    }

    createProductsList(): Array<JSX.Element> { //creating product items on Product page
        let result = this.props.productsItems.map(productItem => <ProductItem setCartItemsCount={this.props.setCartItemsCount} product={productItem} key={productItem.id} />);
        return result;
    }

    render() {
        return (<div className="products-page">
            <ul className="products-list">
                {this.createProductsList()}
            </ul>
        </div>);
    }
}



const mapToStateProps = (state: any) => ({
    productsItems: state.productsPage.productsItems
});

export default connect(mapToStateProps, { setCartItemsCount })(ProductsPage);