import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="full-screen-background">
      {/* style={{ */}
      {/* // backgroundImage: `url("https://decproduction.ddns.net/Image/React/monentum.png")` */}
      {/* // backgroundImage: `url("https://decproduction.ddns.net/Image/React/002.jpg")` */}
      {/* }}> */}
      <NavBar />
      <Body />
    </div>
  )
}

export default App


const Body: React.FC = () => {
  return (
    <>
     <div className="Body"> {/* ใช้ className ที่เราตั้งไว้ใน CSS */}
        <h1 className="text-3xl font-bold underline">
        </h1>
      </div>
    </>
  )
};
