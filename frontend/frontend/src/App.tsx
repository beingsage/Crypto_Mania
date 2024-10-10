import { Routes, Route } from 'react-router-dom';
import Coins from './pages/Coins';
import Market from './pages/Market';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Analysis from './pages/Analysis';
import History from './pages/History';
import Home from './pages/Home';
import Intro from './pages/Intro';
import User from './pages/User';
import Transaction from './pages/Transaction';



function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/Market" element={<Market />} />
        <Route path="/Home/User" element={<User/>} />
        <Route path="/Home/Coins" element={<Coins/>} />
        <Route path="/Home/User/Analysis" element={<Analysis />} />
        <Route path="/Home/User/History" element={<History />} />
        <Route path="/Home/User/Transaction" element={<Transaction />} />
        
      </Routes>
      
    </>
  );
}

export default App;
