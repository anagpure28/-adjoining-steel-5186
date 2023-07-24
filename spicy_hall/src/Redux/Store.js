import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AdminReducer} from "../Redux/AdminReducer/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    AdminReducer
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))