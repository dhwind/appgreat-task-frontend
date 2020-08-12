import { toggleCartActivity, removeFromCart } from './header-reducer';
import { ProductItemOptions } from "../products-page-reducer/products-page-state-interfaces";

export interface LinkItemsOptions {
    id: number;
    pageName: string;
    pageUrl: string;
}

export interface CartOptions {
    totalPrice: number,
    isActive: boolean;
    cartItems: Array<ProductItemOptions>;
    cartItemsCount: number;
    productsData?: Array<ProductItemOptions>;
}

export interface HeaderStateOptions {
    linkItems: Array<LinkItemsOptions>;
    cart: CartOptions;
    toggleCartActivity?: any;
}