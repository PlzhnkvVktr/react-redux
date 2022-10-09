import { UsersAction, UsersActionTypes } from '../../types/users';
import axios from "axios";
import { Dispatch } from "redux";

export const authUser = (user: any) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3000/users')
            .then(response => {return response})
            const data = await response.data
            let currentUser = data.find((i: any) => i.login === user.login && i.password === user.password);
            if (currentUser) {
                const res = await axios.get(`http://localhost:3000/users/${currentUser.id}`)
                .then(res => res.data)
                res.auth = true
                await axios.put(`http://localhost:3000/users/${currentUser.id}`, {
                ...res,
                })
                dispatch({type: UsersActionTypes.CURRENT_USER, payload: currentUser.id})
                localStorage.setItem('token', JSON.stringify(res));
                console.log('авторизация прошла успешно')
            } else {
                console.log('пароль либо логин неверны')
            }
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Не удалось получить список пользователей'})
        }
    }
}

export const outUser = (owner: {login: string; password: string}) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3000/users')
                .then(response => {return response})
            const data = await response.data
            owner = JSON.parse(localStorage.getItem('token')!)
            let currentUser = data.find((i: {login: string; password: string}) => i.login === owner.login && i.password === owner.password);
            if (currentUser) {
                const res = await axios.get(`http://localhost:3000/users/${currentUser.id}`)
                    .then(res => res.data)
                res.auth = false
                await axios.put(`http://localhost:3000/users/${currentUser.id}`, {
                    ...res,
                })
                localStorage.removeItem('token')
                }
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Не удалось получить список пользователей'})
        }
    }
}

export const regUser = (newUser: any) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3000/users')
            .then(response => {return response})
            const data = await response.data
            let currentUser = data.find((i: any) => i.login === newUser.login && i.password === newUser.password);
            if (currentUser) {
                console.log('такой пользователь уже существует')
            } else {
                console.log('пользователь зарегистрирован')
                axios.post(`http://localhost:3000/users/`, { ...newUser })
            }
            dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Не удалось получить список пользователей'})
        }
    }
}