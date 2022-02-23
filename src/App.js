import React from "react";
import "./App.css";
import Api from "./components/Api";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="background"> <Api /></div> 
        <Footer/>
      </div>
    </>
  );
}

export default App;
