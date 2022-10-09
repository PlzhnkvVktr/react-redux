export interface UsersState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    CURRENT_USER = 'CURRENT_USER',
    AUTH_CLIENT = 'AUTH_CLIENT',
    OUT_USER = 'OUT_USER'
}
interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface CurrentUserAction {
    type: UsersActionTypes.CURRENT_USER;
    payload: number
}
interface OutUserAction {
    type: UsersActionTypes.OUT_USER;
    // payload: {
    //     auth: boolean
    // };
}


export type UsersAction = FetchUsersAction 
    | FetchUsersErrorAction 
    | FetchUsersSuccessAction
    | OutUserAction
    | CurrentUserAction