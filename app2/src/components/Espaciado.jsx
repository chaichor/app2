const SpacingExample = () => (
    <div className="mt-10">
      <div className="flex space-x-10">
        <div className="bg-blue-500 text-white p-4">Elemento 1</div>
        <div className="bg-green-500 text-white p-4">Elemento 2</div>
      </div>
  
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-red-500 text-white p-4">Elemento 1</div>
        <div className="bg-yellow-500 text-white p-4">Elemento 2</div>
        <div className="bg-purple-500 text-white p-4">Elemento 3</div>
      </div>
    </div>
  );
  
  export default SpacingExample;