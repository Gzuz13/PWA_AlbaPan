// components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="header bg-yellow-500 dark:bg-gray-900 shadow mb-6">
    <div className="header-container flex items-center justify-center max-w-7xl mx-auto px-6 py-4">
      <img src="/path/to/images/logo.png" alt="Logo AlbaPan" className="logo h-10 w-auto mr-4" /> {/* Ajusta la ruta */}
      <nav className="nav-links flex space-x-8 text-gray-800 dark:text-gray-200 justify-center">
        <a href="/" className="hover:text-gray-600 dark:hover:text-gray-400">Inicio</a>
        <a href="/productos" className="hover:text-gray-600 dark:hover:text-gray-400">Nuestro Pan</a>
        <a href="/promociones" className="hover:text-gray-600 dark:hover:text-gray-400">Promociones</a>
        <a href="/lo-nuevo" className="hover:text-gray-600 dark:hover:text-gray-400">Lo Nuevo</a>
        <a href="/conocenos" className="hover:text-gray-600 dark:hover:text-gray-400">Conócenos</a>
      </nav>
    </div>
  </header>
  );
}
