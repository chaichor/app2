import React, { useState } from 'react';

export default function Formulario() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion);
    };

    const handleDividir = () => {
        if (parseFloat(num2) === 0) {
            setResultado('No se puede dividir por cero');
        } else {
            const division = parseFloat(num1) / parseFloat(num2);
            setResultado(division);
        }
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Datos de Entrada</h2>
            
            <div className="space-y-6">
                {/* Campo 1 */}
                <div className="flex flex-col gap-2">
                    <label className="text-gray-600 font-medium">Número 1:</label>
                    <input 
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>
    
                {/* Campo 2 */}
                <div className="flex flex-col gap-2">
                    <label className="text-gray-600 font-medium">Número 2:</label>
                    <input 
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>
    
                {/* Mostrar resultado */}
                {resultado !== null && (
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-gray-600 font-medium">Resultado:</label>
                        <p className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 text-center">
                            {resultado}
                        </p>
                    </div>
                )}
            </div>
    
            {/* Botones de operaciones */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                    onClick={handleSumar}
                    className="p-3 bg-blue-100 text-black font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Sumar
                </button>

                <button
                    onClick={handleRestar}
                    className="p-3 bg-green-100 text-black font-bold rounded-lg hover:bg-green-700 transition-colors">
                    Restar
                </button>

                <button
                    onClick={handleMultiplicar}
                    className="p-3 bg-yellow-100 text-black font-bold rounded-lg hover:bg-yellow-700 transition-colors">
                    Multiplicar
                </button>

                <button
                    onClick={handleDividir}
                    className="p-3 bg-red-100 text-black font-bold rounded-lg hover:bg-red-700 transition-colors">
                    Dividir
                </button>
            </div>

            {/* Botón Limpiar */}
            <button
                onClick={handleLimpiar}
                className="w-full mt-6 p-3 bg-gray-200 text-black font-bold rounded-lg hover:bg-gray-700 transition-colors">
                Limpiar
            </button>
        </div>
    );
}

