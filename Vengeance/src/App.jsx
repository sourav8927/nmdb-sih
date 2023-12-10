import './App.css'
import Faqs from "./components/Faqs/Faqs"
import Socials from './components/Socials/Socials'
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps'
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path = "/" element={
            <>
              <Faqs/>
              <Login />
              <PhotoSlider />
              <Socials/>
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