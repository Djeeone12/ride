import React from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import RideOptions from './components/RideOptions';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="relative flex-1">
        <SearchBar />
        <Map />
      </div>
      <RideOptions />
    </div>
  );
}

export default App;