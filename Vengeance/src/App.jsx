import './App.css'
import Faqs from "./components/Faqs/Faqs"
import Socials from './components/Socials/Socials'
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps'
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
<Header></Header>
<Login/>

    </>
  )
}

export default App;