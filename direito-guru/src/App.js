
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Routes>
    </Router>
      </> 
    
  );
}

export default App;