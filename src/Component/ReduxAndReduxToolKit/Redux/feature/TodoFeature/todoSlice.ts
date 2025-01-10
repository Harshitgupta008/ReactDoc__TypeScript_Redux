import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todostype {
    id: String;
    name: string;
    email: string;
    number: number;
    place: string;
    about: string;
}

interface todoState {
    todo: todostype[];
}
const initialState: todoState = {
    todo: [],
}

export const todoSclice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        AddTodo: (state, action: PayloadAction<{ name: string, email: string, number: number, place: string, about: string }>) => {
            const newTodos: todostype = {
                id: Date.now().toString(),
                name: action.payload.name,
                email: action.payload.email,
                number: action.payload.number,
                place: action.payload.place,
                about: action.payload.about,
            }
            state.todo = [...state.todo, newTodos]
        },

        RemoveTodo: (state, action: PayloadAction<string>) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
        },

        UpdateTodo: (state, action: PayloadAction<{ userID: string, name: string, email: string, place: string, number: number, about: string }>) => {
            // state.todo = state.todo.map(todo => 
            //     todo.id === action.payload.userid ? { ...todo, text: action.payload.newText } : todo
            // );
            const todoToUpdate = state.todo.find(todo => todo.id === action.payload.userID);

            if (todoToUpdate) {
                todoToUpdate.name = action.payload.name;
                todoToUpdate.email = action.payload.email;
                todoToUpdate.number = action.payload.number;
                todoToUpdate.place = action.payload.place;
                todoToUpdate.about = action.payload.about;
            }

        }
    }
})

export const { AddTodo, RemoveTodo, UpdateTodo } = todoSclice.actions;
export default todoSclice.reducer;