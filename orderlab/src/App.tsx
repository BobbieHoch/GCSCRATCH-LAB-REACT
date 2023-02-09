import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import OrderContextProvider from './context/OrderContextProvider';
import { MenuList } from './components/MenuList';


function App() {
  return (
    <div className="App">
      <OrderContextProvider>
      <Header />
      <MenuList />
        <Sidebar />
        </OrderContextProvider>
    </div>
  );
}

export default App;
