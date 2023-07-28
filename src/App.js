import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { parseCSVData } from './utils/csvParser';
import FilterComponent from './components/Filter';
import CustomTable from './components/CustomTable';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // Set the number of rows per page here
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataset_small.csv');
        const text = await response.text();
        const parsedData = await parseCSVData(text);
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, []);

  // Function to get unique values of a column based on other filters
  const getUniqueValues = (columnName) => {
    let uniqueValues = data.map((item) => item[columnName]);
    // Filter out null/undefined values and convert to string
    uniqueValues = uniqueValues.filter((value) => value != null).map(String);
    return [...new Set(uniqueValues)];
  };


  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Calculate the index of the last row for the current page
  const indexOfLastRow = currentPage * rowsPerPage;

  // Calculate the index of the first row for the current page
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Get the data for the current page
  const paginatedData = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      {/* Render the filters */}
      <FilterComponent
        title="mod3"
        options={getUniqueValues('mod3').map((value) => ({ value }))}
      />
      <FilterComponent
        title="mod4"
        options={getUniqueValues('mod4').map((value) => ({ value }))}
      />
      <FilterComponent
        title="mod5"
        options={getUniqueValues('mod5').map((value) => ({ value }))}
      />
      <FilterComponent
        title="mod6"
        options={getUniqueValues('mod6').map((value) => ({ value }))}
      />

      {/* Render the custom table */}
      <CustomTable data={paginatedData} />

      {/* Pagination */}
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
