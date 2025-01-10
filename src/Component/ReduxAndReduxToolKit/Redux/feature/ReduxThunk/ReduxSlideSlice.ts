import { createSlice } from "@reduxjs/toolkit"

interface SlideType {
    slidestatus: boolean;
}
const initialState: SlideType = {
    slidestatus: false,
}

export const ReduxSlideSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        SliderStatus: (state) => {
            state.slidestatus = !state.slidestatus;
        }
    }
})

export const { SliderStatus } = ReduxSlideSlice.actions;
export default ReduxSlideSlice.reducer;