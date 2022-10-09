import { ProductsAction, ProductsActionTypes } from '../../types/products';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const response = await axios.get('http://localhost:3000/products')
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Не удалось получить список продуктов'})
        }
    }
}

export const setSearhProduct = async () => {
    const response = await axios.get('http://localhost:3000/products')
    return {type: ProductsActionTypes.SET_SEARCH_PRODUCT_NAME, payload: response.data}
}

// export const getCurrentProduct = (currentProduct: string): ProductsAction => {
//     return {type: ProductsActionTypes.GET_CURRENT_PRODUCT, payload: currentProduct}
// }