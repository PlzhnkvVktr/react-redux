export interface ProductsState {
    products: any[];
    loading: boolean;
    error : null | string;
    searchProductName: string;
    // currentProduct: string;
}
export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    SET_SEARCH_PRODUCT_NAME = 'SET_SEARCH_PRODUCT_NAME',
    GET_CURRENT_PRODUCT = 'GET_CURRENT_PRODUCT'
}
interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[];
}
interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}
interface  SetSearchProductName {
    type: ProductsActionTypes.SET_SEARCH_PRODUCT_NAME;
    payload: string;
}
// interface  GetCurrentProduct {
//     type: ProductsActionTypes.GET_CURRENT_PRODUCT;
//     payload: string;
// }

export type ProductsAction = FetchProductsAction 
    | FetchProductsErrorAction 
    | FetchProductsSuccessAction 
    | SetSearchProductName
    // | GetCurrentProduct