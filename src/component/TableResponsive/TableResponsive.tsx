import React from 'react';

const TableResponsive = () => {
  return (
    <div className="container mx-auto mt-8 w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Currency</th>
            <th className="py-2 px-4 border-b">Purchase</th>
            <th className="py-2 px-4 border-b">Selling</th>
            {/* Add more header columns as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-6 px-4 border-b text-center font-bold">USD</td>
            <td className="py-6 px-4 border-b text-center ">20</td>
            <td className="py-6 px-4 border-b text-center">25</td>
            {/* Add more rows with data as needed */}
          </tr>
          <tr>
            <td className="py-6 px-4 border-b text-center font-bold">EUR</td>
            <td className="py-6 px-4 border-b text-center">40</td>
            <td className="py-6 px-4 border-b text-center">30</td>
            {/* Add more rows with data as needed */}
          </tr>
          <tr>
            <td className="py-6 px-4 border-b text-center font-bold">PLN</td>
            <td className="py-6 px-4 border-b text-center">50</td>
            <td className="py-6 px-4 border-b text-center">24</td>
            {/* Add more rows with data as needed */}
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponsive;
