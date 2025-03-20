import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/CartSlice'
import productReducer from './slices/ProductsSlice'



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;