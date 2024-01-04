import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBarDesign/Navbar";
import Home from "./Components/NavBarDesign/Home";
import About from "./Components/About/About";
import Internship from "./Components/Internship/Internship";
import Footer from "./Components/NavBarDesign/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/intern" element={<Internship></Internship>}></Route>
        </Routes>

        <Footer></Footer>
      </Router>

      
    </div>
  );
}

export default App;
