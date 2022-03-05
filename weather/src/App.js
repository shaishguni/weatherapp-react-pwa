import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
         Developed by{" Shaish Guni"}
        <br/>
        <a  href="https://shaishguni-cv.netlify.app/">
          Shaish Guni
          </a>
        
      </div>
    </React.Fragment>
  );
}

export default App;