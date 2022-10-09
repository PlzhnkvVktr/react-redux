import { ProductsState, ProductsAction, ProductsActionTypes } from './../../types/products';


const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
    searchProductName: "",
    // currentProduct: '',
}

export const productReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch(action.type){
        case ProductsActionTypes.FETCH_PRODUCTS: {
            return {...state, loading: true}
        }
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {...state, loading: false, products: action.payload}
        }
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        case ProductsActionTypes.SET_SEARCH_PRODUCT_NAME: {
            return {...state, searchProductName: action.payload}
        }
        // case ProductsActionTypes.GET_CURRENT_PRODUCT: {
        //     return {...state, currentProduct: action.payload}
        // }
        default: {
            return state
        }
    }
}