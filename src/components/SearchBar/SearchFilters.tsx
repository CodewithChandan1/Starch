interface FilterOption {
  id: string;
  label: string;
}

interface SearchFiltersProps {
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'images', label: 'Images' },
  { id: 'news', label: 'News' },
  { id: 'videos', label: 'Videos' }
];

export function SearchFilters({ selectedFilter, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="flex gap-4 mt-4">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedFilter === option.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}