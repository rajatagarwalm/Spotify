import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './AuthReducer';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

const mainReducer = combineReducers({
    authReducer: authReducer
})

const persistConfig = {
    key: 'persistLoginState',
    storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))

export const persistor = persistStore(store);

export default store;