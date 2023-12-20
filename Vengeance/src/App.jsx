import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faqs from './components/Faqs/Faqs';
import Socials from './components/Socials/Socials';
import Login from './components/Login/Login';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/Aboutus/Aboutus";
import Header from "./components/Header/Header";
import ChooseUser from "./components/ChooseUser/ChooseUser";
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import LocateCenter from './components/LocateCenter/LocateCenter';
import NgoRegistration from './components/NgoRegistration/NgoRegistration';
import NgoDashBoard from './components/NgoDashBoard/NgoDashBoard';
import userlandingpage from './components/User Landing Page/user-landing-page';
import Events from './components/Events/Events';
import NgoDashActions from './components/NgoDashActions/NgoDashActions';
import Ngoinformation from './components/NgoInformation/Ngoinformation';
import TestServer from './components/TestServer/TestServer'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element={
            <>
              <PhotoSlider />
              <Events />
              <Aboutus/>
              <Socials/>
              <Faqs/>
            </>
          } />
          <Route path = "/Dashboard" element={
            <>
            <Dashboard />
            </>
          }/>
          <Route path = "/LoginUser" element={
            <Login />
          }/>
          <Route path = "/testServer" element={
            <TestServer />
          }/>
          <Route path = "/locateCentre" element={
           <LocateCenter />
          }/>
          <Route path="/registerPage" element={
            <Register/>
          }/>
          <Route path="/NgoRegisterPage" element={
            <NgoRegistration/>
          }/>
          <Route path="/NgoDashBoard" element={
            <NgoDashBoard/>
          }/>
          <Route path="/NgoDashActions" element={
            <NgoDashActions/>
          }/>
          <Route path = "/Cuser" element={
            <ChooseUser />
          }/>
          <Route path ="/AboutUs" element={
            <Aboutus />
          }/>
          <Route path = "/UserLandingPage" element={
            <Login />
          }/>
          <Route path = "/Ngoinformation" element={
            <Ngoinformation />
          }/>
          
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
