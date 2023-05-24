import './App.css';
import Login from './components/Login'
import Grounds from './pages/Grounds';
import { BrowserRouter as Router,Redirect , Route, Switch, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './pages/Home';
import AddGround from './pages/AddGround';
function App() 
{
  return (
    <> 
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Registration" element={ <Registration /> } />
      <Route path='/Signup' element={<Login />} />
      <Route path='/grounds' element={<Grounds/>} />
      <Route path='/add' element={<AddGround/>} />
    </Routes>
    </> 
  );
}

export default App;
