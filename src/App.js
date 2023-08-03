import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Services from "./pages/Services";
import Client from "./pages/Client";
import Mail from "./pages/Mail";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <About/>
      <Services/>
      <Client/>
      <Mail/>
      <Footer/>
    </div>
  );
}

export default App;
