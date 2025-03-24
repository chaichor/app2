import React, { useState } from "react";

const UserList = () => {
    // Estado para manejar la lista de usuarios
    const [users, setUsers] = useState([]);
    // Estado para manejar los valores de los inputs
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [carnet, setCarnet] = useState("");

    // Función para agregar un nuevo usuario
    const addUser = () => {
        if (name.trim() === "" || age.trim() === "" || carnet.trim() === "") return; // Evitar agregar usuarios con campos vacíos
        setUsers([...users, { id: Date.now(), name, age, carnet }]);
        setName(""); // Limpiar el input de nombre
        setAge(""); // Limpiar el input de edad
        setCarnet(""); // Limpiar el input de carnet
    };

    // Función para eliminar un usuario
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-10 w-200">
                <h1 className="font-semibold text-center text-gray-800 mb-6">User List</h1>

                {/* Disposición horizontal de los campos de entrada */}
                <div className="flex space-x-10 mb-10">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"/>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Edad"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"/>
                    <input
                        type="text"
                        value={carnet}
                        onChange={(e) => setCarnet(e.target.value)}
                        placeholder="Carnet"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"/>
                </div>

                {/* Botón para agregar el usuario */}
                <button
                    onClick={addUser}
                    className="bg-red-500 text-black p-2 rounded-md hover:bg-red-700 focus:outline-none">
                    Agregar Usuario
                </button>

                <div className="flex flex-wrap space-x-6 space-y-6 mt-12">
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center bg-gray-100 p-10 rounded-md w-80">
                            <div className="flex flex-col flex-1 mr-10">
                                <p className="font-semibold">{user.name}</p>
                                <p className="font-semibold">Edad: {user.age}</p>
                                <p>Carnet: {user.carnet}</p>
                            </div>

                            <button
                                onClick={() => deleteUser(user.id)}
                                className="text-red-300 hover:text-red-700">
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserList;
