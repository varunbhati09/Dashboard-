import React from 'react';
import './CustomTable.css'; // Add a CSS file for custom styling (optional)

const CustomTable = ({ data }) => {
  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>number</th>
            <th>mod3</th>
            <th>mod4</th>
            <th>mod5</th>
            <th>mod6</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.mod3}</td>
              <td>{item.mod4}</td>
              <td>{item.mod5}</td>
              <td>{item.mod6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
