
import "./App.css"
// import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import SinglePage from "./components/watch/SinglePage"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Header__top from "./components/Header__top/Header__top"
import Header__down from "./components/Header__down/Header__down"
import Article__slider from "./components/Article__slider/Article__slider"
import Video__slider from "./components/Video__slider/Video__slider"
import Video__slider_latest from "./components/Video__slider_latest/Video__slider_latest"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
      <Router>
        <Header__top/>
        <Header__down/>

        <Article__slider/>
        <Video__slider/>
        <Video__slider_latest/>
        {/* <Header/> */}

        <Switch>
        {/* <Route exact path='/' component={HomePage} /> */}
        {/* <Route path='/singlepage/:id' component={SinglePage} exact /> */}
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
