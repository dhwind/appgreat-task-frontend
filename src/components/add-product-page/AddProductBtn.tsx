import React from 'react';
import { NavLink } from 'react-router-dom';

interface AddProductBtnProps {
    productNameText: string;
    productPriceText: string;
    productUrlText: string;
    addProductItem: any;
    resetProductFields: any;
}

class AddProductBtn extends React.Component<AddProductBtnProps, {}> {
    render() {
        return (<div className="add-product-page__forms__save">
                    <NavLink to="/products">
                        <button onClick={() => {
                            this.props.addProductItem(this.props.productNameText, this.props.productPriceText, this.props.productUrlText); //adding new item to Product page
                            this.props.resetProductFields(); //reset form values at Add product page
                            }}>Save</button>
                    </NavLink>
                </div>);
    }
}

export default AddProductBtn;