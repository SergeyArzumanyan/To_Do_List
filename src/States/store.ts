import { configureStore } from '@reduxjs/toolkit';
import { ToDosReducer } from './reducers';

export const store = configureStore({
    reducer: {
        ToDos: ToDosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;