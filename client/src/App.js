import React from "react";
import "./css/clothing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carousel from './components/clothng-store/Carrousel'
import Header from './components/clothng-store/Header'
import MainPage from './pages/MainPage'
import StorePage from './pages/StorePage'
import ContactPage from './pages/Contact'
import Footer from './components/clothng-store/Footer'

function App() {
   


  return (
    <BrowserRouter>
    <Carousel />
    <Header />
    <Switch>
      <Route  path='/' component={MainPage} exact={true} />
      <Route path='/store' component={StorePage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
<Footer />
  </BrowserRouter>
  )
}

export default App;
