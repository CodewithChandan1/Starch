import { Search } from 'lucide-react';

interface SearchInputProps {
  query: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function SearchInput({ query, onChange, onSubmit }: SearchInputProps) {
  return (
    <form 
      className="relative w-full max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search anything..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </form>
  );
}