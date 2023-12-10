import './App.css'
import Login from './components/Login/Login';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import ChooseUser from './components/ChooseUser/ChooseUser';

function App() {
  return (
    <>
<Header></Header>
<ChooseUser/>
<Login/>
<PhotoSlider/>
<Footer/>

    </>
  )
}

export default App;