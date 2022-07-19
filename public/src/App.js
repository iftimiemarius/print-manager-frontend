import React from 'react';
import NavBar from './NavBar'
import './App.css';

import Home from "./pages/home"
import Print from "./pages/print"
import Scan from "./pages/scan"
import Copy from "./pages/copy"

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/print':
      component = <Print />
      break
    case '/scan':
      component = <Scan />
      break
    case '/copy':
      component = <Copy />
      break
  }
  return (
    <>
      <NavBar />
      <div>{component}</div>
    </>
  )
}

export default App;
