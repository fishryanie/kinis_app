import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reactotron from 'configs/reactotron';
import app from './app/reducer';

const rootReducer = combineReducers({app});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(reactotron.createEnhancer!()),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
