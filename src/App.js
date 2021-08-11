import {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';
import Subheader from './Subheader';
import Cart from './Cart';
import Home from './Home'
import Login from './Login';
import styled from 'styled-components'
import 
    {BrowserRouter as Router, 
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import db, { auth } from './firebase'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
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

    const signOut = ()=>{
      auth.signOut()
      .then(()=>{
        localStorage.removeItem('user')
        setUser(null)
      })
    
    }

    useEffect(()=>{
      getCartItems()
    },[])


  return (
    <Router>
      {
        //if no user exists then Login else show everything else
        !user ? (
          <Login setUser = {setUser}/>
        ): (

      <Container>
        <Header 
        user = {user} 
        cartItems = {cartItems}
        signOut = {signOut}
        />
        <Subheader/>
        <Switch>

          <Route path = "/cart">
            <Cart cartItems = {cartItems}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        
        </Switch>
      </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div``