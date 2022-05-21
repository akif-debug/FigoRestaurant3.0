import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route exact path='/'></Route>
        <Route exact path='Home' element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App