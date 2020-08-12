import React from 'react';
import HeaderMenuListItem from './HeaderMenuListItem';
import { connect } from 'react-redux';
import cartImage from './../../../assets/images/cart.svg';
import Cart from '../cart/Cart';
import { LinkItemsOptions } from '../../../redux/reducers/header-reducer/header-state-interfaces';
import { toggleCartActivity } from '../../../redux/reducers/header-reducer/header-reducer';
import CartItemsCount from '../cart/CartItemsCount';

interface HeaderProps {
  linkItems: Array<LinkItemsOptions>;
  toggleCartActivity: any;
  cartItemsCount: number;
}

class HeaderMenuList extends React.Component<HeaderProps, {}> {

  createMenuItems(): Array<JSX.Element> { //creating navigation links at header menu
      let result = this.props.linkItems.map(linkItem => <HeaderMenuListItem linkItem={linkItem} key={linkItem.id} />);
      return result;
  }

  render() {
    return (
    <>
      <ul className="header-panel__menu-list">
        {this.createMenuItems()}
      </ul>
      <div className="header-panel__cart" onClick={() => this.props.toggleCartActivity(true)}>
        <img src={cartImage} alt="cart" />
        {/* This component renders count of cart items */}
        <CartItemsCount cartItemsCount={this.props.cartItemsCount} />
      </div>
      <Cart />
    </>
    );
  }
}

const mapToStateProps = (state: any) => ({
    linkItems: state.header.linkItems,
    cartItemsCount: state.header.cart.cartItemsCount
});

export default connect(mapToStateProps, { toggleCartActivity })(HeaderMenuList);
