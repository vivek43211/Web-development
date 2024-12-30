import { createSlice , nanoid } from "@reduxjs/toolkit";

// nanoid for uniquie id

const initialstate = {
    todos : [{Id :1 ,text : "hello world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: ()=>{},
        removetodo : ()=>{}
    }
})