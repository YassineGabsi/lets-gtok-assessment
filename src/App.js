import './App.css';
import Header from "./components/header/Header";
import React, {useEffect} from "react";
import TopSection from "./components/top-section/TopSection";
import Features from "./components/features-section/Features";
import WhyLetsGtok from "./components/why-lets-gtok/WhyLetsGtok";
import Contact from "./components/contact/Contact";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init({
            duration : 750
        });
    }, []);

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
