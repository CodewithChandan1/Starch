import { ResultsList } from './ResultsList';

const mockResults = [
  {
    id: '1',
    title: 'Understanding SEO Fundamentals',
    description: 'A comprehensive guide to Search Engine Optimization basics and best practices.',
    url: 'https://example.com/seo-guide',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Advanced SEO Techniques',
    description: 'Learn advanced SEO strategies to improve your website ranking.',
    url: 'https://example.com/advanced-seo',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

interface SearchResultsProps {
  query: string;
  filter: string;
}

export function SearchResults({ query, filter }: SearchResultsProps) {
  // In a real app, you would fetch results based on query and filter
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <ResultsList results={mockResults} isLoading={false} />
    </div>
  );
}