import './App.css';;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faqs from './components/Faqs/Faqs';
import Socials from './components/Socials/Socials';
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {
  return (
    <>
      <Aboutus />
    </>
    <div className='app'>
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
          <Route path = "/LoginUser" element={
            <Login />
          }/>
          <Route path = "/Cuser" element={
            <ChooseUser />
          }/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
