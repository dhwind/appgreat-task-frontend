import React from 'react';

interface CartItemsCountProps {
    cartItemsCount: number;
}

class CartItemsCount extends React.Component<CartItemsCountProps, {}> {
    render() {
        return (<div className="header-panel__cart__items-count">
            <p>{localStorage.length}</p>
        </div>)
    }
}

export default CartItemsCount;