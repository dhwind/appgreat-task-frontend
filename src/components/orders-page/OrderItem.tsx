import React from 'react';
import { OrderOptions } from '../../redux/reducers/orders-page-reducer/orders-page-state-interfaces';

interface OrderItemProps {
    order: OrderOptions;
    removeOrder: any;
}

class OrderItem extends React.Component<OrderItemProps, {}> {
    render() {
        return <li className="orders-list__item">
            <div className="orders-list__item__number"><p>Order # {this.props.order.id}</p></div>
            <ul className="orders-list__item__products-list">
                {this.props.order.items.map(item => <li key={item.id}>{`- ${item.name}`}</li>)}
            </ul>
            <div className="orders-list__item__price">{this.props.order.price}$</div>
            <div className="orders-list__item__status">{this.props.order.status}</div>
            <div className="orders-list__item__delete-btn">
                <button onClick={() => this.props.removeOrder(this.props.order)}>&times;</button>
            </div>
        </li>;
    }
}

export default OrderItem;