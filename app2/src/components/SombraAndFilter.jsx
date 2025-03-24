const ShadowEffects = () => (
    <div className="flex justify-around mt-10">
      <div className="shadow-xl p-6 bg-white w-48 text-center">
        <h3>Shadow XL</h3>
      </div>
      <div className="shadow-inner p-6 bg-gray-200 w-48 text-center">
        <h3>Shadow Inner</h3>
      </div>
      <div className="filter blur-sm p-6 bg-blue-100 w-48 text-center">
        <h3>Filtro Blur</h3>
      </div>
    </div>
  );
  
  export default ShadowEffects;
  