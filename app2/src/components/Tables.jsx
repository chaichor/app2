const TableExample = () => (
    <div className="mt-10">
      <table className="table-auto w-full divide-y-2 divide-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100">Nombre</th>
            <th className="px-4 py-2 bg-gray-100">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Juan</td>
            <td className="px-4 py-2">25</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ana</td>
            <td className="px-4 py-2">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default TableExample;