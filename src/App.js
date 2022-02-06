import React from "react";
import Basket from "../src/pages/Basket";
import Home from "../src/pages/Home";
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";


function App () {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Registration />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/basket" element={<Basket />}/>
          </Routes>
      </div>
  );
}

export default App;
