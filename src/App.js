import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/RecipeTable';

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery}/>
      <Table query={query}/>
    </div>
  );
}

export default App;
