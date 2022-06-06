import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  const [navBar, setNavBar] = useState(false);

  const modifyNavbar = () => {
    if (window.scrollY >= 55) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", modifyNavbar);
  return (
    <>
    <Router>
      <Nav navbar={navBar} />
      <Routes>
        <Route exact path='/'></Route>
        <Route exact path='Home' element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App