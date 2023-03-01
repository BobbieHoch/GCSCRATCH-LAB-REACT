import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todo, setTodos] = useState([
        { title: "exercise", id: 0 },
        { title: "laundry", id: 1 },
        { title: "dishes", id: 2 },
        { title: "study", id: 3 },
    ]);
    return (
        <div className="TodoListContainer">
            {TodoList.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
            <div className="DeleteButton">
                <p>delete</p>
            </div>
        </div>
    );
}
