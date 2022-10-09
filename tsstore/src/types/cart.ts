export interface CartState {
    cartList: any[]
    loading: boolean;
    error: null | string;
    total: null | number;
}
export enum CartActionTypes {
    FETCH_CART = 'FETCH_CART',
    FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
    FETCH_CART_ERROR = 'FETCH_CART_ERROR',
    ADD_TO_CART='ADD_TO_CART',
    REMOVE_FROM_CART='REMOVE_FROM_CART',
    TOTAL_PRICE='TOTAL_PRICE',
    DISABLET_BUTTON='DISABLET_BUTTON',
}

interface FetchCartAction {
    type: CartActionTypes.FETCH_CART;
}
interface FetchCartSuccessAction {
    type: CartActionTypes.FETCH_CART_SUCCESS;
    payload: any;
}
interface FetchCartErrorAction {
    type: CartActionTypes.FETCH_CART_ERROR;
    payload: string;
}
interface TotalPriceAction {
    type: CartActionTypes.TOTAL_PRICE;
    payload: number;
}
interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART;
    payload: any;
}
interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: any;
}


export type CartAction = FetchCartAction 
    | FetchCartErrorAction 
    | FetchCartSuccessAction
    | AddToCartAction
    | RemoveFromCartAction
    | TotalPriceAction