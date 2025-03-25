import React from "react";

const Bio = ({ nombre, edad, informacion }) => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-xl shadow-xl p-8 space-y-8">
        {/* Foto responsive */}
        <div className="w-full rounded-lg overflow-hidden">
          <img 
            src="https://definicion.com/wp-content/uploads/2022/09/imagen.jpg" 
            alt="Foto de perfil"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Datos con props */}
        <div className="space-y-4">
          {/* Nombre */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Nombre:</h2>
            <p className="text-gray-600 text-sm md:text-base">{nombre}</p>
          </div>

          {/* Edad */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Edad:</h2>
            <p className="text-gray-600 text-sm md:text-base">{edad}</p>
          </div>

          {/* Información adicional */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Información adicional:</h2>
            <p className="text-gray-600 text-sm md:text-base">{informacion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;