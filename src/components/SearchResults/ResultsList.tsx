import { ResultCard } from './ResultCard';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

interface ResultsListProps {
  results: SearchResult[];
  isLoading: boolean;
}

export function ResultsList({ results, isLoading }: ResultsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No results found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <ResultCard key={result.id} {...result} />
      ))}
    </div>
  );
}