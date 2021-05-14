import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import React from "react";
import TopSection from "./components/top-section/TopSection";
import Features from "./components/features-section/Features";
import WhyLetsGtok from "./components/why-lets-gtok/WhyLetsGtok";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Features/>
      <WhyLetsGtok/>
      <Contact/>
    </div>
  );
}

export default App;
