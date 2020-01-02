import React from 'react';
import './App.css';
import GetData from "./components/GetData";
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <GetData />
    </div>
  );
}

export default App;
