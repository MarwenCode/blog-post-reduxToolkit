import { createSlice } from '@reduxjs/toolkit';


export const postsSlice = createSlice({
    name:"posts",
    initialState: {
        items: [],
    },
    reducers: {
        addPost: (state, action) => {
           state.items.push(action.payload)
           console.log(action)
        }

    }
});


export const { addPost } = postsSlice.actions

export default postsSlice.reducer