export default function Formulario() {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">Datos de Entrada</h2>
        
        <div className="space-y-6">
          {/* Campo Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">Informacion 1:</label>
            <input 
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Campo Edad */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">Informacion 2:</label>
            <input 
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Campo Información */}
          <div className="flex flex-col gap-2">
          </div>
        </div>
  
        {/* Botón */}
        <button className="w-full mt-6 p-3 bg-blue-100 text-black font-bold rounded-lg hover:bg-blue-700 transition-colors bg-color-black">
          Calcular
        </button>
      </div>
    )
  }
  