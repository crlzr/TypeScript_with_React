// general redux store set up

import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slices';

// creates a Redux store, object tells how store should be set up
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

// what data will be involved in dispatching
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;