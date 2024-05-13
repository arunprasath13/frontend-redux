import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0
}


const countSlice = createSlice({
    name:"count",
    initialState,
    reducers: {
        incrementPro: (state,action) => {
            state.count += 1;
        }
    }
})

export const {incrementPro} = countSlice.actions
export default countSlice.reducer