import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react'
import Index from './components/Index';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path="/"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
