import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlbaPan from './components/Home/Home';
import NuestroPan from './components/NuestroPan/NuestroPan';
import Promociones from './components/Promociones/Promociones';
import LoNuevo from './components/LoNuevo/LoNuevo';
import Contactanos from './components/Contactanos/Contactanos';

import Layout from './components/Layout/Layout';
import './components/Layout/Layout.css';


function App() {
  return (
    <Router>
      <Layout>
            <nav className="navigation">
                <a><Link to="/">AlbaPan</Link></a>
                <a><Link to="/nuestroPan">Nuestro Pan</Link></a>
                <a><Link to="/promociones">Promociones</Link></a>
                <a><Link to="/loNuevo">Lo Nuevo</Link></a>
                <a><Link to="/contactanos">Contactanos</Link></a>
            </nav>

            <Routes>
                <Route path="/" element={<AlbaPan />} />
                <Route path="/nuestroPan" element={<NuestroPan />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/loNuevo" element={<LoNuevo />} />
                <Route path="/contactanos" element={<Contactanos />} />
            </Routes>
      </Layout>
    </Router>
  );
}

export default App;
