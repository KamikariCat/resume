import React from 'react';
import './App.css';
import LeftBar from "./components/leftbar";
import RightBar from "./components/rightbar";
import About from "./components/about";

export default function App() {
  return (
    <div className="App">
      <div className="lang">
          <span>En</span>
      </div>
      <LeftBar />
      <About ru={true}/>
      <RightBar />
    </div>
  );
}
