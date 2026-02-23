import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "my redux",
    initialState: {
        count: 0,
        names: 'redux text'
    }
})

export default appSlice.reducer