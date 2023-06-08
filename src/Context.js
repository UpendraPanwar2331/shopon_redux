import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <FilterContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
