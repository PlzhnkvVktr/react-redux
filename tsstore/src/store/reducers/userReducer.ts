import { UsersState, UsersAction, UsersActionTypes } from '../../types/users';


const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UsersAction): UsersState => {
    switch(action.type){
        case UsersActionTypes.FETCH_USERS: {
            return {...state, loading: true}
        }
        case UsersActionTypes.FETCH_USERS_SUCCESS: {
            return {...state, loading: false, users: action.payload}
        }
        case UsersActionTypes.FETCH_USERS_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default: {
            return state
        }
    }
}