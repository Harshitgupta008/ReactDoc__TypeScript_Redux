import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


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
}
interface DatastoreType {
    status: string;
    message: string;
    products: ProductsType[];
}

interface ReduxThunkState {
    data: DatastoreType;
    isLoading: boolean;
    isError: boolean;
}

export const getData = createAsyncThunk<DatastoreType, void>("getData", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.in/api/products?limit=60");
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error("Network error");
    }
});

const initialState: ReduxThunkState = {
    data: {
        status: '',
        message: '',
        products: [],
    },
    isLoading: false,
    isError: false,
}


const ReduxThunkGetSlice = createSlice({
    name: "getData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getData.fulfilled, (state, action: PayloadAction<DatastoreType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false;
                console.log("isError" + action.payload)
            });
    },
});

export const { reducer: productReducer } = ReduxThunkGetSlice; 
