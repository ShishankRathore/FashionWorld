import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Project1/Navbar';
import Home from './Project1/Home';
import About from './Project1/About';
import Cart from './Project1/Cart';
import Contact from './Project1/Contact';
import Products from './Project1/Products';
import SignUp from './Project1/SignUp';
import Login from './Project1/Login';
import Splash from './Project1/Splash';
import Blog from './Project1/Blog';
import { useState, useEffect } from 'react';


const App = () => {
  const [showsplash, setshowsplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setshowsplash(false)
    }, 8000);
  })
  return (<>
    {showsplash ? <Splash></Splash>:
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products></Products>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Blog" element={<Blog/>}/>

        </Routes>
      </div>
    }
  </>
  );
}

export default App;
