import { OrdersPageState, OrderOptions } from "./orders-page-state-interfaces";

let initialState: OrdersPageState = {
    ordersData: [{
        id: 2362,
        status: "payment",
        price: 69.9,
        currency: "BGN",
        items: [
            {
                id: 1,
                name: "Leather High Heel Sandals With Gathering",
                price: 39.95,
                image: "https://cf.shopee.com.my/file/36df2e1d04ca103f16ccefffa9927728"
            },
            {
                id: 2,
                name: "Pleated Palazzo Trousers TRF",
                price: 29.95,
                image: "https://cf.shopee.ph/file/fecc650ca5802d709890a66cc00cfe23"
            }
        ]
    }]
}

const _PLACE_ORDER = "PLACE_ORDER";
const _REMOVE_ORDER = "REMOVE_ORDER";

const ordersPageReducer = (state = initialState, action: any) => {
    switch(action.type) {

        case _PLACE_ORDER:

            let newOrder: OrderOptions = {
                id: state.ordersData[state.ordersData.length - 1] ? state.ordersData[state.ordersData.length - 1].id + 1 : 2362,
                status: "payment",
                price: action.totalPrice,
                currency: "BGN",
                items: [...action.cartItems]
            }

            return { ...state, ordersData: [...state.ordersData, newOrder] };

        case _REMOVE_ORDER:
            
            let orders = [...state.ordersData];
            orders.splice(orders.indexOf(action.order), 1);
            return { ...state, ordersData: orders };

        default:
            return state;
    }
}

export const placeOrder = (cartItems: any, totalPrice: number) => ({ type: _PLACE_ORDER, cartItems, totalPrice });

export const removeOrder = (order: any) => ({ type: _REMOVE_ORDER, order });

export default ordersPageReducer;