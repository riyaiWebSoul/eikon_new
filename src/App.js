import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Pages.js/Home";
import './assets/style.css'
import './assets/mobile.css'
import './assets/super-classes.css'
import Router from "./Router";


function App() {
  return (
    <div className="App">
        <Header/>
        <Router/>
        {/* <Home/> */}
        <Footer/>
    </div>
  );
}

export default App;
