import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import ProductsPage from './components/products-page/ProductsPage';
import OrdersPage from './components/orders-page/OrdersPage';
import AddProductsPage from './components/add-product-page/AddProductPage';

class App extends React.Component<any> {
  render() {
    return (<div className="app-wrapper">
        <Header />
        <Route exact path="/" render={() => <ProductsPage />} />
        <Route exact path="/products" render={() => <ProductsPage />} />
        <Route exact path="/orders" render={() => <OrdersPage />} />
        <Route exact path="/add-product" render={() => <AddProductsPage />} />
    </div>);
  }
}

export default App;
