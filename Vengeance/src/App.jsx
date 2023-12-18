import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faqs from './components/Faqs/Faqs';
import Socials from './components/Socials/Socials';
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/Aboutus";
import Header from "./components/Header/Header";
import ChooseUser from "./components/ChooseUser/ChooseUser";
import Register from './components/Register/Register';


function App() {
  return (
    // <>
    //   <Aboutus />
    // </>
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element={
            <>
              <PhotoSlider />
              <Aboutus/>
              <Socials/>
              <Faqs/>
            </>
          } />
          <Route path = "/maps" element={
            <Maps />
          }/>
          <Route path = "/LoginUser" element={
            <Login />
          }/>
          <Route path="/registerPage" element={
            <Register/>
          }/>
          <Route path = "/Cuser" element={
            <ChooseUser />
          }/>
          <Route path ="/AboutUs" element={
            <Aboutus />
          }/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
