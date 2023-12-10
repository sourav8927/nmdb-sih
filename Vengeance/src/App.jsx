import './App.css'
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps'
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Nav from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path = "/" element={
            <>
              <Login />
              <PhotoSlider />
            </>
          } />
          <Route path = "/maps" element={
            <Maps />
          }/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;