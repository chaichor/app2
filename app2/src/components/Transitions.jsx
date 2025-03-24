const TransitionsAnimations = () => (
    <div className="flex justify-center space-x-10 mt-10">
      <button className="transition duration-500 ease-in-out transform hover:scale-110 p-4 bg-blue-500 text-black rounded-md">
        Hover para Transición
      </button>
  
      <div className="animate-bounce p-6 bg-yellow-300 rounded-md">
        Animación Bounce
      </div>
  
      <div className="animate-spin p-6 bg-green-300 rounded-md">
        Animación Spin
      </div>
    </div>
  );
  
  export default TransitionsAnimations;