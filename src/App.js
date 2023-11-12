import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


// ================================================== Home & Navbar
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// ================================================== Energy
import Energy from "./components/Energy/Energy";
import Adminenergy from "./components/Energy/Adminenergy";
import Studentpg from "./components/Energy/Studentpg";
import Landlord from "./components/Energy/Landlord";
// =================================================== Library
import Lib from "./components/Lib/Lib";
import Applib from "./components/Lib/Applib";

import Web3 from "web3";
import Makers from "./components/About/Makers";
// import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <body>
        <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Navbar></Navbar>
                <Home></Home>
              
              </Route>
              <Route path="/energy">
                <Energy></Energy>
             
              </Route>
              <Route path="/library">
                <Lib></Lib>
              
              </Route>
             
              {/* <Route path="/foodiegenie-admin"> */}
                {/* <Navbar></Navbar> */}
                {/* 
              </Route> */}
              <Route path="/foodiegenie-owner">
                {/* <Navbar></Navbar> */}
                
              </Route>
              <Route path="/foodiegenie">
                {/* <Navbar></Navbar> */}
                
              </Route>
              <Route path="/foodiegenie-orders">
                {/* <Navbar></Navbar> */}
                
              </Route>
              <Route path="/transactions">
                {/* <Navbar></Navbar> */}
                <Adminenergy></Adminenergy>
              </Route>
              <Route path="/energytrading">
                {/* <Navbar></Navbar> */}
                <Adminenergy></Adminenergy>
              </Route>
              <Route path="/prosumers">
                {/* <Navbar></Navbar> */}
                <Adminenergy></Adminenergy>
              </Route>
              <Route path="/lib-ebook">
                <Applib></Applib>
              </Route>
              <Route path="/id-proof">
                <Applib></Applib>
              </Route>
              {/* <Route path="/lib">
                <Lib></Lib>
                <Footer></Footer>
              </Route> */}
              {/* <Route path="/lib-admin">
                <Applib></Applib>
              </Route> */}
              <Route path="/lib-librarian">
                {/* <Navbar></Navbar>
                <Adminl></Adminl> */}
                <Applib></Applib>
              </Route>
              {/* ===================== */}
              <Route path="/admin">
                <Applib></Applib>
                <Adminenergy></Adminenergy>
                
              </Route>
              <Route path="/termination">
                <Applib></Applib>
                <Adminenergy></Adminenergy>
              </Route>
              {/* ==================== */}
              <Route path="/about-us">
                <Navbar></Navbar>
                <Makers></Makers>
               
              </Route>
            </Switch>
          </Router>
        </div>
      </body>
    );
  }
}
export default App;
