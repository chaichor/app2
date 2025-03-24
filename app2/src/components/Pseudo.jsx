const HoverFocusExample = () => (
    <div className="mt-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-md transition duration-300">
        Hover para Cambiar Color
      </button>
  
      <input
        type="text"
        className="mt-6 p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enfoque para Resaltar"
      />
    </div>
  );
  
  export default HoverFocusExample;