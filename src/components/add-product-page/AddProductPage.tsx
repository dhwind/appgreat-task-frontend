import React from 'react';
import AddProductBtn from './AddProductBtn';
import { connect } from 'react-redux';
import { updateProductFieldText, resetProductFields } from '../../redux/reducers/add-product-reducer/add-product-page-reducer';
import { addProductItem } from '../../redux/reducers/products-page-reducer/products-page-reducer';

interface AddProductsPageProps {
    productNameText: string;
    productPriceText: string;
    productUrlText: string;
    updateProductFieldText: any;
    addProductItem: any;
    resetProductFields: any;
}

class AddProductsPage extends React.Component<AddProductsPageProps, {}> {

    componentDidMount() {
        document.title = "Add product page";
    }

    render() {
        return (<div className="add-product-page">
            <div className="add-product-page__title"><p>New Product</p></div>
            <div className="add-product-page__forms">
                <input onChange={el => this.props.updateProductFieldText(el.target.value, el.target.placeholder)} placeholder="Product name" className="add-product-page__forms__name" type="text" value={this.props.productNameText} />
                <input onChange={el => this.props.updateProductFieldText(el.target.value, el.target.placeholder)} placeholder="Price" className="add-product-page__forms__price" type="text" value={this.props.productPriceText} />
                <input onChange={el => this.props.updateProductFieldText(el.target.value, el.target.placeholder)} placeholder="Image Url" className="add-product-page__forms__image" type="text" value={this.props.productUrlText} />
                {/* This component adds product item and navigates to the Product page*/}
                <AddProductBtn addProductItem={this.props.addProductItem} resetProductFields={this.props.resetProductFields} productNameText={this.props.productNameText} productPriceText={this.props.productPriceText} productUrlText={this.props.productUrlText} />
            </div>
        </div>);
    }
}

const mapToStateProps = (state: any) => ({
    productNameText: state.addProductPage.productNameText,
    productPriceText: state.addProductPage.productPriceText,
    productUrlText: state.addProductPage.productUrlText,
});

export default connect(mapToStateProps, { updateProductFieldText, addProductItem, resetProductFields })(AddProductsPage);