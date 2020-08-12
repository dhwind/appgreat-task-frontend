import { ProductItemOptions } from "../products-page-reducer/products-page-state-interfaces";

export interface OrderOptions {
    id: number;
    status: string;
    price: number;
    currency: string;
    items: Array<ProductItemOptions>;
}

export interface OrdersPageState {
    ordersData: Array<OrderOptions>;
    removeOrder?: any;
}