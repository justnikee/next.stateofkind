import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    name: string;
    imageUrls: string[];
    price: number;
}
interface ProductState {
  list: Product[];
}

const initialState: ProductState = {
  list: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
    },
    addProducts: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setProducts, addProducts } = productSlice.actions;
export default productSlice.reducer;
