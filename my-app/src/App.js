import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SearchBox from './components/SearchBox';
function App() {
  useEffect(() => {
    fetch("")
  })
  return (
    <div className="App">
      <Home />
      <SearchBox/>
    </div>
  );
}

export default App;
