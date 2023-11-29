import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBarDesign/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
