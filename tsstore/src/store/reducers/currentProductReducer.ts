import { ProductState, ProductAction, ProductActionTypes } from './../../types/product';


const initialState: ProductState = {
    currentProduct: {},
    loading: false,
    error: null,
}

export const currentProductReducer = (state = initialState, action: ProductAction): ProductState => {
    switch(action.type){
        case ProductActionTypes.FETCH_PRODUCT: {
            return {...state, loading: true}
        }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS: {
            return {...state, loading: false, currentProduct: action.payload}
        }
        case ProductActionTypes.FETCH_PRODUCT_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default: {
            return state
        }
    }
}