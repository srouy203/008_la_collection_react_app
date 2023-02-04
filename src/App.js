
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Switch, Route ,BrowserRouter } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Facebook from './component/Facebook';


function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/facebook" component={Facebook}/>
      </Switch>
          
        
     
    </>
  );
}

export default App;
