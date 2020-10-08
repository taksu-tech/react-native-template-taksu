import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import account from './account/reducer';

// combined reducer
const rootReducer = combineReducers({
    account,
});

export type RootState = ReturnType<typeof rootReducer>;

// redux persist
const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware();

        // add logger in development
        if (__DEV__) {
            middleware.push(logger);
        }

        return middleware;
    },
    devTools: __DEV__,
});

export const persistor = persistStore(store);
