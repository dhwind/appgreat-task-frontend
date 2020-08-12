import { createStore, combineReducers } from 'redux';
import headerReducer from './reducers/header-reducer/header-reducer';
import productsPageReducer from './reducers/products-page-reducer/products-page-reducer';
import ordersPageReducer from './reducers/orders-page-reducer/orders-page-reducer';
import addProductPageReducer from './reducers/add-product-reducer/add-product-page-reducer';

const reducersBatch: any = combineReducers({ header: headerReducer, productsPage: productsPageReducer, ordersPage: ordersPageReducer, addProductPage: addProductPageReducer });

const store: any = createStore(reducersBatch);

export default store;