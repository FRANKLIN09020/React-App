import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from "./component/Appbar";
import Home from "./component/Home";
import Menu from "./component/Menu";
import '@coreui/coreui/dist/css/coreui.min.css';
import Contact from "./component/Contact";
import About from "./component/About";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
   <Appbar/> 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Menu' element={<Menu/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='About' element={ <About/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
