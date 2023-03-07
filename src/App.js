import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contacto" element={ <Contacto />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      </BrowserRouter>
      <Footer  />
    </div>
  );
}

export default App;
