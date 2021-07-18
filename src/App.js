import React from 'react';
import './App.css';
import menu from "../src/images/Menu.svg"
import logo from "../src/images/Logo.png"
import search from "../src/images/Search.svg"
import image from "../src/images/Car.png"

function App() {
  return (
    <div className="App">
      <div className="nav">
          <img src={menu} className="menu" alt="" />
          <img src={logo} className="logo" alt="" />
          <img src={search} className="search" alt="" />
      </div>
      <div className="container">
         <h1 className="heading">The All New <span className="big-h1">S-Class</span></h1>
      </div>
      <div className="container">
         <img src={image} className="image animate fadeInUp" alt="" />
      </div>
      <div className="w-layout-grid grid">
        <div className="feature-box box-1 animate two fadeInUp">
           <h1 className="feature-heading">Luxury</h1>
           <div className="text-block block-1">The greatest refinement out there paired with technological brilliance.</div>
        </div>
        <div className="feature-box box-2 animate three fadeInUp">
           <h1 className="feature-heading">362 hp</h1>
           <div className="text-block block-2">The S-class has plenty of punch when driven at full tilt on the Autobahn.</div>
        </div>
        <div className="feature-box box-3 animate four fadeInUp">
           <h1 className="feature-heading">Twin turbo</h1>
           <div className="text-block block-3">Simultaneous performance and luxury. A unique unmatched synergy.</div>
        </div>
      </div>

    </div>
  );
}

export default App;
