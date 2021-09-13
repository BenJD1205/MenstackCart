import React from 'react';
import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SliderDrawer from './components/SliderDrawer';
function App() {

  const [sideToggle,setSideToggle] = useState(false);

  return (
    <Router>
      {/*Navbar */}
      <Navbar click={() => setSideToggle(true)} />
      {/*SliderDrawer */}
      <SliderDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/*Backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
