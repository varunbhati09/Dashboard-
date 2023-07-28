// components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import MultiSelect from 'multiselect-react-dropdown';
import { setFilter } from '../redux/reducers/actions'; // Update the import path to your action file

const FilterComponent = ({ title, options }) => {
  const dispatch = useDispatch();

  const handleSelect = (selected) => {
    dispatch(setFilter(title, selected));
  };

  // If the options are already in the correct format, use them as is
  const formattedOptions = options.map((option) =>
    typeof option === 'object' ? option : { value: option }
  );

  return (
    <div>
      <h3>{title}</h3>
      <MultiSelect
        options={formattedOptions} // Use the formatted options
        onSelect={handleSelect}
        onRemove={handleSelect}
        displayValue="value"
      />
    </div>
  );
};

export default FilterComponent;
