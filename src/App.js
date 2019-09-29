import React, {useState} from 'react';
import './App.css';
import LeftBar from "./components/leftbar";
import RightBar from "./components/rightbar";
import About from "./components/about";

export default function App() {
    const [lang, setLang] = useState(false);
  return (
    <div className="App">
      <div className="lang">
          <span onClick={() => setLang(!lang)}> {lang ? 'Ru' : 'En'} </span>
      </div>
      <LeftBar ru={lang}/>
      <About ru={lang}/>
      <RightBar ru={lang}/>
    </div>
  );
}
