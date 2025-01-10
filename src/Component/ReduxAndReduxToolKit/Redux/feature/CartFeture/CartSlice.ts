import { createSlice } from "@reduxjs/toolkit";
interface ProductsType {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number
    cartItemQuantity:number;
}

interface initialStateType {
    cartItem: ProductsType[];
    cartTotalAmount: number;
    cartTotalQuantity: number;
}
const initialState:initialStateType = {
    cartItem: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const checkItemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
            if (checkItemIndex >= 0) {
                state.cartItem[checkItemIndex].cartItemQuantity += 1;
                state.cartTotalAmount += action.payload.price;
            } else {
                const addItem = { ...action.payload, cartItemQuantity: 1 };
                state.cartItem.push(addItem);
                state.cartTotalQuantity += 1;
                state.cartTotalAmount += action.payload.price;
            }
        },
        removeToCart(state, action) {
            const checkItemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
            if (checkItemIndex >= 0) {

                if (state.cartItem[checkItemIndex].cartItemQuantity > 1) {

                    state.cartItem[checkItemIndex].cartItemQuantity -= 1;
                    state.cartTotalAmount -= action.payload.price;
                } else {

                    state.cartItem.splice(checkItemIndex, 1);
                    state.cartTotalQuantity -= 1;
                    state.cartTotalAmount -= action.payload.price;
                }
            }
        }
    }
})

export const { addToCart, removeToCart } = CartSlice.actions;
export default CartSlice.reducer;