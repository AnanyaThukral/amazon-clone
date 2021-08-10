import {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';
import Subheader from './Subheader';
import Cart from './Cart';
import Home from './Home'
import 
    {BrowserRouter as Router, 
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import db from './firebase'

function App() {
  const [cartItems, setCartItems] = useState([])

  const getCartItems = ()=>{
    db.collection('CartItems').onSnapshot(snapshot=>{
      const tempItems = snapshot.docs.map(doc=>({
        id:doc.id,
        product:doc.data()
      }
      ))
      setCartItems(tempItems)
    })
  }

    useEffect(()=>{
      getCartItems()
    },[])

    console.log(cartItems)

  return (
    <Router>
      <div className="App">
        <Header cartItems = {cartItems}/>
        <Subheader/>
        <Switch>
          <Route path = "/cart">
            <Cart cartItems = {cartItems}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
