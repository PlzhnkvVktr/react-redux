import * as ProductsActionCreators from './products'
import * as CurrentProductActionCreators from './currentProduct'
import * as UsersActionCreators from './users'
import * as CartActionCreators from './cart'

export default {
    ...ProductsActionCreators,
    ...CurrentProductActionCreators,
    ...UsersActionCreators,
    ...CartActionCreators,
}