import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchFilters } from './SearchFilters';

interface SearchBarProps {
  onSearch: (query: string, filter: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = () => {
    onSearch(query, selectedFilter);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <SearchInput
        query={query}
        onChange={setQuery}
        onSubmit={handleSearch}
      />
      <SearchFilters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
    </div>
  );
}