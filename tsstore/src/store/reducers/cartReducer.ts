import { CartState, CartAction, CartActionTypes } from '../../types/cart';


const initialState: CartState = {
    cartList: [],
    loading: false,
    error: null,
    total: null,
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch(action.type){
        case CartActionTypes.FETCH_CART: {
            return {...state, loading: true}
        }
        case CartActionTypes.FETCH_CART_SUCCESS: {
            return {...state, loading: false, cartList: action.payload}
        }
        case CartActionTypes.FETCH_CART_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        case CartActionTypes.ADD_TO_CART: {
            return {...state, loading: false, cartList: action.payload}
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            return {...state, loading: false, cartList: action.payload}
        }
        case CartActionTypes.TOTAL_PRICE: {
            return {...state, loading: false, total: action.payload}
        }
        default: {
            return state
        }
    }
}