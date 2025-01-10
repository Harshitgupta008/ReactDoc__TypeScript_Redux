import { createContext, ReactNode, useContext, useState } from "react"


interface TodoListArrayType {
    id: String;
    text: string;
    complete: boolean
}

interface CreateContextType {
    TodoList: TodoListArrayType[];
    setTodoList: React.Dispatch<React.SetStateAction<TodoListArrayType[]>>;
}

export const TodoContext = createContext<CreateContextType | undefined>(undefined);

interface ProvideType {
    children: ReactNode;
}

export const ContextProvider: React.FC<ProvideType> = ({ children }) => {

    const [TodoList, setTodoList] = useState<TodoListArrayType[]>([]);

    return <TodoContext.Provider value={{ TodoList, setTodoList }}>
        {children}
    </TodoContext.Provider>

}

export const UseTodo = ():any => {
    return useContext(TodoContext);
}