import { AddProductPageState } from "./add-product-page-state-interfaces";

let initialState: AddProductPageState = {
    productNameText: "",
    productPriceText: "",
    productUrlText: ""
};

const _UPDATE_PRODUCT_FIELD_TEXT = "UPDATE_PRODUCT_NAME_TEXT";
const _RESET_PRODUCT_FIELDS = "RESET_PRODUCT_FIELDS";

const _UPDATE_PRODUCT_NAME_PLACEHOLDER = "Product name";
const _UPDATE_PRODUCT_PRICE_PLACEHOLDER = "Price";
const _UPDATE_PRODUCT_URL_PLACEHOLDER = "Image Url";

const addProductPageReducer = (state = initialState, action: any) => {

    if(action.type === _UPDATE_PRODUCT_FIELD_TEXT) {

        switch(action.placeholder){

            case _UPDATE_PRODUCT_NAME_PLACEHOLDER:

                return {...state, productNameText: action.text};

            case _UPDATE_PRODUCT_PRICE_PLACEHOLDER:
                
                return {...state, productPriceText: action.text};

            case _UPDATE_PRODUCT_URL_PLACEHOLDER:
                
                return {...state, productUrlText: action.text};

            default:
                return state;
        }
            
    }

    else if(action.type === _RESET_PRODUCT_FIELDS) {
        return {...state, productNameText: "", productPriceText: "", productUrlText: ""};
    }
            

    return state;
}

export const updateProductFieldText = (text: string, placeholder: string) => ({ type: _UPDATE_PRODUCT_FIELD_TEXT, text, placeholder });

export const resetProductFields = () => ({ type: _RESET_PRODUCT_FIELDS });

export default addProductPageReducer;