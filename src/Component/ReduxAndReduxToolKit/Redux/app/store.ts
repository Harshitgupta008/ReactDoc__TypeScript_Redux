import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoFeature/todoSlice";
import { productReducer } from "../feature/ReduxThunk/ReduxThunkSlice";
import sliderReducer from "../feature/ReduxThunk/ReduxSlideSlice";
import cartReducer from "../feature/CartFeture/CartSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        product: productReducer,
        slider: sliderReducer,
        cart :cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 