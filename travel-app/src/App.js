import react from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Products from './component/pages/Products';
import Services from './component/pages/Services';
import SignUp from './component/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products"  component={Products} />
        <Route path="/services"  component={Services} />
        <Route path="/sign-up"  component={SignUp} />
      </Switch>
      
    </Router>
      
    </>
  );
}

export default App;
