export interface CartItem {
    id: string;
    productId: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    productImage?: string;
}


export interface CartState {
    cartItems: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

export interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    imageUrls: string[];
    createdAt: Date;
    updatedAt: Date;
    comparedAtPrice: number;
}

export interface Products {
    id: string;
    name: string;
    price: number;
    imageUrls?: string[];
}