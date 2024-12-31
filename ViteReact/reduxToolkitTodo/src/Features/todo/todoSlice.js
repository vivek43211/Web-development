import { createSlice , nanoid } from "@reduxjs/toolkit";

// nanoid for uniquie id

const initialState = {
    todos : [{Id :1 ,text : "hello world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo: (state,action)=>{
            const todo = {
                Id :nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removetodo : (state ,action)=>{
            state.todos = state.todos.filter((todo)=> todo.Id !== action.payload)
        },
        upadetodo : (state,action)=>{
            state.todos = state.todos.map((todo) => todo.Id === action.payload.Id ? {...todo, text : action.payload.text} : todo)
        }
    }
})
export const {addTodo,removetodo,upadetodo} = todoSlice.actions;

export default todoSlice.reducer;
// state give acceess to intialstate and upadet about id text present in todo
//The action parameter represents the action object that is dispatched to trigger the reducer. 
//Actions are plain JavaScript objects that typically have a type field to indicate the action type and may include other data relevant to the action.
//You use the action.type to determine what kind of action is being performed,
// and you can also access the payload or other properties of the action object to make decisions on how to update the state.

//steps of creating 
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload 
// export individual functionality 
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai 