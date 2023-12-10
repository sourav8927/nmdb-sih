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
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element={
            <>
              <PhotoSlider />
              <Faqs/>
              <Socials/>
            </>
          } />
          <Route path = "/maps" element={
            <Maps />
          }/>
          <Route path = "/login" element={
            <Login />
          }/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;