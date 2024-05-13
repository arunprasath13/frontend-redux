import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    loading:false,
    error: null
};

export const fetchApi = createAsyncThunk("api/fetchApi", async () => {   // slicename/actionname
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    return data;
});

const apiSlice = createSlice({      // It is used to create slice
    name:'api',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchApi.pending,(state,action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApi.fulfilled,(state,action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApi.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default apiSlice.reducer;
