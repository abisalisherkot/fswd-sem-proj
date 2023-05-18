import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner'
import ControlledCarousel from './components/Carousel'
import Newssection from './components/NewsSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './pages/Home';
function App() 
{
  return (
    <> 
   
    <Routes>

      <Route path="/" element={ <Home /> } />
      <Route path="/Registration" element={ <Registration /> } />

    </Routes></>
   
    
   
    
  
    
    
   
  );
}

export default App;
