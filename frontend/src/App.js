import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';
import Display from './components/Display';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Banner />} />
        <Route path="display" element={<Display />} />
        <Route path="register" element={<Signup />} />
      </Routes>
   
    </>
   
  );
}

export default App;
