import './styles/pages.css'
import './styles/layout.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
// import Header from './components/layout/Header'
import NavList from './components/layout/Nav'
import Footer from './components/layout/Footer'

//import pages
import HomePages from './pages/HomePages'
import ContactoPages from './pages/ContactoPages'
import NosotrosPages from './pages/NosotrosPages'
import ServiciosPages from './pages/ServiciosPages'
import NovedadesPages from './pages/NovedadesPages'
import GaleriaPages from './pages/GaleriaPages'
import Header from './components/layout/Header';


//import estilos react boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <NavList />
        <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/contacto' element={<ContactoPages/>} />
        <Route path='/nosotros' element={<NosotrosPages/>} />
        <Route path='/servicios' element={<ServiciosPages/>} />
        <Route path='/novedades' element={<NovedadesPages/>} />
        <Route path='/galeria' element={<GaleriaPages/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
