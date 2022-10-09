import { fetchCurrentProduct } from './currentProduct';
import { CartAction, CartActionTypes } from '../../types/cart';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchCart = () => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({type: CartActionTypes.FETCH_CART})
            const user = JSON.parse(localStorage.getItem('token')!)
            const response = await axios.get(`http://localhost:3000/users/${user.id}`)
            dispatch({type: CartActionTypes.FETCH_CART_SUCCESS, payload: response.data.cart})
            const total = response.data.cart.reduce((sum: number, elem: {price: number}) => {
                return sum + elem.price;
            }, 0);
            dispatch({type: CartActionTypes.TOTAL_PRICE, payload: total})
        } catch (e) {
            dispatch({type: CartActionTypes.FETCH_CART_ERROR, payload: 'Не удалось получить список продуктов'})
        }
    }
}

export const removeFromCart = (id: number) =>{
    return async (dispatch: Dispatch<CartAction>)=>{
        try {
            dispatch({type: CartActionTypes.FETCH_CART})
            const user = JSON.parse(localStorage.getItem('token')!)
            const response = await axios.get(`http://localhost:3000/users/${user.id}`)
                .then(response => response.data.cart)
            const newCart = response.filter((i: {id: number}) => {return i.id !== id})
            axios.put(`http://localhost:3000/users/${user.id}`, {
                ...user, cart: newCart
            })
            dispatch({type: CartActionTypes.REMOVE_FROM_CART, payload: newCart})
            const total = newCart.reduce((sum: number, elem: {price: number}) => {
                return sum + elem.price;
            }, 0);
            dispatch({type: CartActionTypes.TOTAL_PRICE, payload: total})
        } catch (e) {
            dispatch({type: CartActionTypes.FETCH_CART_ERROR, payload: 'Не удалось получить список продуктов'})
        }    
    }
}

export const addToCart = (currentProduct: {id: number, title: string, description: string, price: number}) =>{
    return async (dispatch: Dispatch<CartAction>)=>{
        try {
            dispatch({type: CartActionTypes.FETCH_CART})
            const user = JSON.parse(localStorage.getItem('token')!)
            const response = await axios.get(`http://localhost:3000/users/${user.id}`)
                .then(response => response.data.cart)
            const newCart = response.find((i: {id: number}) => {return i.id === currentProduct.id})
            if (newCart) {
                dispatch({type: CartActionTypes.FETCH_CART_SUCCESS, payload: response.data.cart})
            } else {
                const newCart = [...response, currentProduct]
                axios.put(`http://localhost:3000/users/${user.id}`, {
                    ...user, cart: newCart
                })
                dispatch({type: CartActionTypes.ADD_TO_CART, payload: newCart})
            }
        } catch (e) {
            dispatch({type: CartActionTypes.FETCH_CART_ERROR, payload: 'Не удалось получить список продуктов'})
        }    
    }
}