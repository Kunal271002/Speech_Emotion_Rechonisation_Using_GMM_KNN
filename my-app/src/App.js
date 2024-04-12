import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar.js";
import { Route, Router, Routes } from "react-router-dom";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import InputFile from "./Components/InputFile.js";
import Home from "./Components/Home/Home.js";

function App() {
  return (  
    <>
    <Navbar title="Speech Emotion Recognition"/>
    <Routes>
      <Route path='/' element={<Home/>}/>      
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='InputFile' element={<InputFile/>}/>  
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
