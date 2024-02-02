import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './Component/Navbar';
import Main from './Component/Main';
import Footer from './Component/Footer';
import About from "./Component/About";
import NvidiaPages from "./Component/nvidia/Nv";
import AmdPages from "./Component/amd/Amd";
import NvPage from "./Component/nvidia/NvPage";
import IntelPages from "./Component/intel/Intel1.jsx";
import IntelPage from "./Component/intel/IntelPage";
import AmdPage from "./Component/amd/AmdPage";


function App() {
  return (
    <div className="App">
      <Router>
            <Nav/>
            <Routes>
                <Route index element ={<Main/>}/>
                <Route path="about" element ={<About/>}/>
                <Route path="footer" element ={<Footer/>}/>
                <Route path="amd" element ={<AmdPages/>}/>
                <Route path="amd/:id" element ={<AmdPage/>}/>
                <Route path="nvd" element ={<NvidiaPages/>}/>
                <Route path="nvd/:id" element ={<NvPage/>}/>
                <Route path="intel" element ={<IntelPages/>}/>
                <Route path="intel/:id" element ={<IntelPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
