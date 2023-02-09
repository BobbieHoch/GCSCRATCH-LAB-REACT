import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header }
import { MenuList } from './components/MenuList';
import { Sidebar } from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      <MenuList />
      <Sidebar />
    </div>
  );
}

export default App;
