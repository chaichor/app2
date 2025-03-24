const Positioning = () => (
    <div className="relative mt-10">
      <div className="absolute top-4 right-4 bg-blue-500 text-white p-4 rounded-md">
        Posición Absoluta
      </div>
      <div className="relative mt-4 bg-gray-200 p-4">
        Contenedor Relativo
      </div>
    </div>
  );
  
  export default Positioning;