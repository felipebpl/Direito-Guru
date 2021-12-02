
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Switch,   Route } from "react-router-dom";

 

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
    </Router>
      </> 
    
  );
}

export default App;