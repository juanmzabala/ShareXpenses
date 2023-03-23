import { useState,useContext } from 'react'
import { ContextProvider } from './context/ContextProvider';
import './App.css'
import CanvaBase from './components/CanvaBase';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CanvaBase />
      </ContextProvider>
    </div>
  )
}

export default App
