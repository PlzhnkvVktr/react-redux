import { combineReducers } from "redux";
import { productReducer } from './productReducer';
import { currentProductReducer } from './currentProductReducer';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';


export const rootReducer = combineReducers({
    product: productReducer,
    currentProduct: currentProductReducer,
    user: userReducer,
    cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>