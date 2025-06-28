import React, { createContext, useContext, useState, useMemo } from 'react';
import { FEATURES } from '../data/features';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState('title-asc');

  const toggleFilter = (value) => {
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => setFilters([]);
  const changeSort = (option) => setSort(option);

  const filteredAndSortedFeatures = useMemo(() => {
    let items = [...FEATURES];

    // Filter logic
    if (filters.length > 0) {
      items = items.filter(
        (item) =>
          item.category?.some((cat) => filters.includes(cat)) ||
          item.tools?.some((tool) => filters.includes(tool))
      );
    }

    // Sort logic
    switch (sort) {
      case 'title-asc':
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        items.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'rating':
        items.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        items.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.date || 0);
          const dateB = new Date(b.createdAt || b.date || 0);
          return dateB - dateA;
        });
        break;
      default:
        break;
    }

    return items;
  }, [filters, sort]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        sort,
        toggleFilter,
        resetFilters,
        changeSort,
        filteredAndSortedFeatures,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilterContext must be used within FilterProvider');
  return ctx;
};