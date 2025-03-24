import React, { useState } from "react";

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");

    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask(""); // Limpiar el input
    };

    // marcar la tarea como completada
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // eliminar la tarea
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-20 w-200">
                <h1 className="font-semibold text-center text-gray-800 mb-10">Todo List</h1>
                
                <div className="flex space-x-2 mb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 focus:outline-none">
                        Add
                    </button>
                </div>

                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li key={todo.id} className={`flex justify-between items-center p-2 rounded-md ${todo.completed ? "bg-green-100 line-through" : "bg-gray-100"}`}>
                            <span
                                onClick={() => toggleComplete(todo.id)}
                                className={`cursor-pointer ${todo.completed ? "text-gray-500" : "text-gray-800"}`}>
                                {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-300 hover:text-red-700">
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
