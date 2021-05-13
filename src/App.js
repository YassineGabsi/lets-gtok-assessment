import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import React from "react";
import TopSection from "./components/top-section/TopSection";

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
    </div>
  );
}

export default App;
