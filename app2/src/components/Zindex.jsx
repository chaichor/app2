const ZIndexExample = () => (
    <div className="relative mt-10">
      <div className="absolute top-0 left-0 z-10 bg-blue-500 text-white p-4">
        Elemento con Z-Index 10
      </div>
      <div className="absolute top-0 left-0 z-20 bg-red-500 text-white p-4 mt-8">
        Elemento con Z-Index 20
      </div>
      <div className="absolute top-0 left-0 z-30 bg-green-500 text-white p-4 mt-16">
        Elemento con Z-Index 30
      </div>
    </div>
  );
  
  export default ZIndexExample;