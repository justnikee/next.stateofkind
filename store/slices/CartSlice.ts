import { CartItem, CartState } from "@/app/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast"



const getSessionStorage = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
};

// 1> initial state
const initialState: CartState = {
    cartItems: getSessionStorage("cartItems", []),
    totalQuantity: getSessionStorage("totalQuantity", 0),
    totalAmount: getSessionStorage("totalAmount", 0),
};


// 2> createSlice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
        const newItem = action.payload;
        // existing item 
        const existingItem = state.cartItems.find(item => item.productId === newItem.productId);


        if (!existingItem) {
            state.cartItems.push({
                ...newItem,
                quantity: newItem.quantity,
                totalPrice: newItem.price * newItem.quantity // ✅ Fix total price calculation
            });
        } else {
            existingItem.quantity += newItem.quantity; // ✅ Increase quantity correctly
            existingItem.totalPrice += newItem.price * newItem.quantity; // ✅ Update total price correctly
        }

        state.totalAmount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
        state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);


        sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        sessionStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        sessionStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));

        toast.success(`${newItem.name} with ${newItem.quantity} Qty. added to Cart!`)
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
    
        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price; // ✅ Deduct based on single unit price
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
    
            // Recalculate total amount and quantity
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    
            // Save updated state to sessionStorage
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                sessionStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
                sessionStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            }
        }
    },
    clearCart: (state) => {
        state.cartItems = [],
        state.totalAmount = 0,
        state.totalQuantity = 0


        sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        sessionStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        sessionStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    }
    }
})

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer

