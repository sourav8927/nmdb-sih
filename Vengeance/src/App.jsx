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
import Services from './components/Services/Services';
import AdmDashboard from './components/AdmDashboard/AdmDashboard';
import Ngoinformation from './components/NgoInformation/Ngoinformation';
import TestServer from './components/TestServer/TestServer'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={
            <>
              <Header />
              <PhotoSlider />
              <Events />
              <Aboutus/>
              <Socials/>
              <Faqs/>
            </>
          } />
          <Route path = "/Dashboard" element={
            <>
            <Header />
            <Dashboard />
            </>
          }/>
          <Route path = "/LoginUser" element={
            <>
            <Header />
            <Login />
            </>
          }/>
          <Route path = "/testServer" element={
            <>
            <Header />
            <TestServer />
            </>
          }/>
          <Route path = "/locateCentre" element={
           <>
           <Header />
           <LocateCenter />
           </>
          }/>
          <Route path="/NgoRegisterPage" element={
            <>
            <Header />
            <NgoRegistration/>
            </>
          }/>
          <Route path="/NgoDashBoard" element={
            <>
            <Header />
            <NgoDashBoard/>
            </>
          }/>
          <Route path="/NgoDashActions" element={
            <>
            <Header />
            <NgoDashActions/>
            </>
          }/>
          <Route path = "/Cuser" element={
            <>
            <Header />
            <ChooseUser />
            </>
          }/>
          <Route path ="/AboutUs" element={
            <>
            <Header />
            <Aboutus />
            </>
          }/>
          <Route path = "/UserLandingPage" element={
            <>
            <Header />
            <Login />
            </>
          }/>
          <Route path = "/Services" element={
            <>
            <Header />
            <Services />
            </>
          }/>
          <Route path = "/Ngoinformation" element={
            <>
            <Header />
            <Ngoinformation />
            </>
          }/>
          <Route path = "/AdminDashboard" element={
            <AdmDashboard/>
          }/>
          
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;
