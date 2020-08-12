import React from 'react';
import { connect } from 'react-redux';
import { OrderOptions } from '../../redux/reducers/orders-page-reducer/orders-page-state-interfaces';
import { removeOrder } from '../../redux/reducers/orders-page-reducer/orders-page-reducer';
import OrderItem from './OrderItem';

interface OrdersPageProps {
    ordersData: Array<OrderOptions>;
    removeOrder: any;
}

class OrdersPage extends React.Component<OrdersPageProps, {}> {

    componentDidMount() {
        document.title = "Orders page";
    }

    createOrders(): Array<JSX.Element> {
        let result = this.props.ordersData.map(orderItem => <OrderItem removeOrder={this.props.removeOrder} order={orderItem} key={orderItem.id} />)
        return result;
    }

    render() {
        
        return (<div className="orders-page">
            <div className="orders-page__title"><p>My Orders</p></div>
            <ul className="orders-list">
                {this.createOrders()}
            </ul>
        </div>);
    }
}

const mapToStateProps = (state: any) => ({
    ordersData: state.ordersPage.ordersData
});

export default connect(mapToStateProps, { removeOrder })(OrdersPage);