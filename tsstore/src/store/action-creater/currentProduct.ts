import { ProductAction, ProductActionTypes } from '../../types/product';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchCurrentProduct = (id: any) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCT})
            const response = await axios.get(`http://localhost:3000/products/${id}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_ERROR, payload: 'Не удалось получить продукт'})
        }
    }
}