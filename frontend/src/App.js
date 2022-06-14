import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
// import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

//import pages
import HomePages from './pages/HomePages'
import ContactoPages from './pages/ContactoPages'
import NosotrosPages from './pages/NosotrosPages'
import ServiciosPages from './pages/ServiciosPages'
import Header from './components/layout/Header';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Nav />
        <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/contacto' element={<ContactoPages/>} />
        <Route path='/nosotros' element={<NosotrosPages/>} />
        <Route path='/servicios' element={<ServiciosPages/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
