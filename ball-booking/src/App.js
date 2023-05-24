import './App.css';
import Login from './components/Login'
import Groundbooking from './pages/Groundbooking';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './pages/home';
function App() 
{
  return (
    <> 
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Registration" element={ <Registration /> } />
      <Route path='/Signup' element={<Login />} />
      <Route path='/bookground' element={<Groundbooking/>} />
    </Routes></> 
  );
}

export default App;
