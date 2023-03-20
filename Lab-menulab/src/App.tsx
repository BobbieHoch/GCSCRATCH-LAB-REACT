import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DetailsRoute } from './components/DetailsRoute';
import './App.css';
import { MenuRoute } from './components/MenuRoute';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Routes>
        <Route path="/menu" element={<MenuRoute />}/>
          <Route path="/details/:id" element={<DetailsRoute />} />
           <Route path="*" element={<Navigate to={"/"}/>}></Route>
        </Routes>
    
      </div>
      </BrowserRouter>
  );
}

export default App;
