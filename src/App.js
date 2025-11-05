import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePrincipal from "./pages/home";
import ProductPrincipal from "./pages/product";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePrincipal/>}></Route>
        <Route path='/product' element={<ProductPrincipal/>}></Route>
        </Routes>  
    </Router>
    
   
  );
}

export default App;
