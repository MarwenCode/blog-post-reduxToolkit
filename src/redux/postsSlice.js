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
        },
        deletePost: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload)
        }

    }
});


export const { addPost, deletePost } = postsSlice.actions

export default postsSlice.reducer