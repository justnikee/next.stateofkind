import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: []
    },
    reducers: {
        setProducts: (state, action) => {
             state.list = action.payload
        },
        addProducts: (state, action) => {
            state.list.push(action.payload)
        }
    }  
})


export const {setProducts, addProducts} = productSlice.actions

export default productSlice.reducer