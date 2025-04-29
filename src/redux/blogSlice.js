import { createSlice } from "@reduxjs/toolkit";

const blogSlice=createSlice({
    name:"blogs",
    initialState:[],
    reducers:{
        addBlogs:(state,action)=>{
            state.push(action.payload)
        },
        removeBlog:(state,action)=>{
            return []
        },
}
}
)

export const {addBlogs,removeBlog} =blogSlice.actions;
export default blogSlice.reducer;