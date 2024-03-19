import { useState } from 'react'
import './App.css'
import SimpleNavigation from './components/Simple/SimpleNavigation';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      {/* <SimpleNavigation />, */}
      <NavBar></NavBar>
      
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App

