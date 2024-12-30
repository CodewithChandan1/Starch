import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { Footer } from './components/Footer';

function App() {
  const [searchState, setSearchState] = useState({
    query: '',
    filter: 'all'
  });

  const handleSearch = (query: string, filter: string) => {
    setSearchState({ query, filter });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Search the web with
              <span className="text-blue-600"> Starch</span>
            </h1>
            <p className="text-gray-600">
              Fast, reliable, and privacy-focused search engine
            </p>
          </div>
          <SearchBar onSearch={handleSearch} />
          {searchState.query && (
            <SearchResults
              query={searchState.query}
              filter={searchState.filter}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;