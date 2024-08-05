import { CartItem, CartState } from "@/app/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast"


// 1> initial state
const initialState: CartState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    totalQuantity: JSON.parse(localStorage.getItem('totalQuantity') || '0'),
    totalAmount: JSON.parse(localStorage.getItem('totalAmount') || '0'),
}


// 2> createSlice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
        const newItem = action.payload;
        // existing item 
        const existingItem = state.cartItems.find(item => item.productId === newItem.productId);
        state.totalQuantity++;
        if(!existingItem){
            state.cartItems.push({
                ...newItem,
                quantity: newItem.quantity,
                totalPrice: newItem.price
            })
        }else{
            existingItem.quantity++;
            existingItem.price += newItem.price
        }
        state.totalAmount += newItem.price;

        state.totalQuantity = state.cartItems.reduce((total , item) => total + item.quantity, 0)


        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));

        toast.success(`${newItem.name} with ${newItem.quantity} Qty. added to Cart!`)
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
    
        if (existingItem) {
            if (existingItem.quantity > 1) {
                // Decrease the quantity and update the total price
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalAmount -= existingItem.price;
            } else {
                // Remove item from cart if quantity is 1
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalAmount -= existingItem.totalPrice;
            }
    
            // Update total quantity
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    
            // Save updated state to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
                localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            }
        }
    },
    clearCart: (state) => {
        state.cartItems = [],
        state.totalAmount = 0,
        state.totalQuantity = 0


        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    }
    }
})

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer

