import React, { useState } from 'react';
import './App.css';
import ReactModal from 'react-modal';
import { LightSwitch } from './components/LightSwitch';
import { TestForm } from './components/TestForm';
import { TodoItem } from './components/TodoItem';

function App() {
  
  return (
    <div className="App">
      <TestForm />
      <LightSwitch />
      <TodoItem />
    </div>
  );
}

export default App;
