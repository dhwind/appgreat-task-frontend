import { ProductsPageState } from "./products-page-state-interfaces";

let initialState: ProductsPageState = {
    productsItems: [
        { 
          id: 1,
          name: "Rubberised Print T-Shirt", 
          price: 9.99, 
          image: "https://st.depositphotos.com/2251265/4803/i/450/depositphotos_48037605-stock-photo-man-wearing-t-shirt.jpg" 
        }, 
        {
          id: 2,
          name: "Contrast Top TRF",
          price: 11.99, 
          image: "https://picture-cdn.wheretoget.it/tvrznj-i.jpg"
        }, 
        { 
          id: 3,
          name: "Tied Leather Heeled Sandals", 
          price: 49.95, 
          image: "https://celticandco.global.ssl.fastly.net/usercontent/img/col-12/69602.jpg" 
        }, 
        { 
          id: 4,
          name: "Leather High Heel Sandals With Gathering", 
          price: 39.95, 
          image: "https://cf.shopee.com.my/file/36df2e1d04ca103f16ccefffa9927728" 
        }
    ]

}

const _ADD_PRODUCT_ITEM = "ADD_PRODUCT_ITEM";

const productsPageReducer = (state = initialState, action: any) => {
    if(action.type === _ADD_PRODUCT_ITEM) {

      let newItem = {
        id: state.productsItems.length + 1,
        name: action.productNameText,
        price: Number(action.productPriceText),
        image: action.productUrlText
      }

      return {...state, productsItems: [...state.productsItems, newItem]};
    }

    return state;
}

export const addProductItem = (productNameText: string, productPriceText: string, productUrlText: string) => ({ type: _ADD_PRODUCT_ITEM, productNameText, productPriceText, productUrlText });

export default productsPageReducer;