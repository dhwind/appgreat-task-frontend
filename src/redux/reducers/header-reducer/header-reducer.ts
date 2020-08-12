import { HeaderStateOptions } from "./header-state-interfaces";

let initialState: HeaderStateOptions = {
    linkItems: [
        {
            id: 1,
            pageName: "Products",
            pageUrl: "/products"
        },
        {
            id: 2,
            pageName: "My Orders",
            pageUrl: "/orders"
        },
        {
            id: 3,
            pageName: "Add Product",
            pageUrl: "/add-product"
        }
    ],
    cart: {
        totalPrice: 0,
        isActive: false,
        cartItems: [],
        cartItemsCount: 0,
    }
};

const _TOGGLE_CART_ACTIVITY = "TOGGLE_CART_ACTIVITY";
const _ADD_TO_CART = "ADD_TO_CART";
const _REMOVE_FROM_CART = "REMOVE_FROM_CART";
const _SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const _SET_CART_ITEMS_COUNT = "SET_CART_ITEMS_COUNT";

const headerReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case _ADD_TO_CART:

            if(state.cart.cartItems.indexOf(action.productItem) === -1) {
                let totalPrice = state.cart.totalPrice + action.productItem.price;
                return { ...state, cart: { ...state.cart, totalPrice, cartItems: [...state.cart.cartItems, action.productItem] }};
            }

            return state;

        case _REMOVE_FROM_CART:
            
            localStorage.removeItem(String(action.cartItem.id));
            let totalPrice = state.cart.totalPrice - action.cartItem.price;
            let items = [...state.cart.cartItems];
            items.splice(items.indexOf(action.cartItem), 1);
            return { ...state, cart: { ...state.cart, totalPrice, cartItems: items }};

        case _TOGGLE_CART_ACTIVITY:
            return { ...state, cart: { ...state.cart, isActive: action.isActive }};

        case _SET_TOTAL_PRICE:
            return { ...state, cart: { ...state.cart, setTotalPrice: action.setTotalPrice }};

        case _SET_CART_ITEMS_COUNT:
            return { ...state, cart: { ...state.cart, cartItemsCount: action.count }};

        default: 
            return state;
    }
}

export const toggleCartActivity = (isActive: boolean) => ({ type: _TOGGLE_CART_ACTIVITY, isActive });

export const addToCart = (productItem: any) => ({ type: _ADD_TO_CART, productItem });

export const removeFromCart = (cartItem: any) => ({ type: _REMOVE_FROM_CART, cartItem });

export const setTotalPrice = (totalPrice: number) => ({ type: _SET_TOTAL_PRICE, totalPrice });

export const setCartItemsCount = (count: number) => ({ type: _SET_CART_ITEMS_COUNT, count });

export default headerReducer;