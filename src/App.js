import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from "./components/Navigation";
import Middle from "./components/Middle";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <SubHeader/>
      <Navigation/>
      <Middle/>
      <Banner/>
      <Footer/>
  </div>
  );
}

export default App;