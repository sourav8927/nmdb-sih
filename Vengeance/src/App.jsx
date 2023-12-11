// import './App.css'
// import Faqs from "./components/Faqs/Faqs"
// import Socials from './components/Socials/Socials'
// import Login from './components/Login/Login';
// import Maps from './components/Maps/Maps'
// import PhotoSlider from './components/PhotoSlider/PhotoSlider';
// import Footer from "./components/Footer/Footer";
// import Header from './components/Header/Header';
// <<<<<<< main
// import ChooseUser from './components/ChooseUser/ChooseUser';
// =======
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// >>>>>>> main

// function App() {
//   return (
//     <>
// <Header></Header>
// <ChooseUser/>
// <Login/>
// <PhotoSlider/>
// <Footer/>

//     </>
//   )
// }

// export default App;
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faqs from './components/Faqs/Faqs';
import Socials from './components/Socials/Socials';
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseUser from './components/ChooseUser/ChooseUser';


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
