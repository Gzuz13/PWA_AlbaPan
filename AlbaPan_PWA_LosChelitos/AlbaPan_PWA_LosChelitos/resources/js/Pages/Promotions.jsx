import React, { useState } from 'react';
import '../../css/promociones/promociones.css';

const promotions = [
  { id: 1, name: 'Promoción 1', imgSrc: './images/20210810_163950.jpg' },
  { id: 2, name: 'Promoción 2', imgSrc: './images/20210810_163952.jpg' },
  { id: 3, name: 'Promoción 3', imgSrc: './images/20210810_164012.jpg' },
  { id: 4, name: 'Promoción 4', imgSrc: './images/20210810_164018.jpg' },
  { id: 5, name: 'Promoción 5', imgSrc: './images/20210810_164023.jpg' },
  { id: 6, name: 'Promoción 6', imgSrc: './images/20210810_164105.jpg' },
  { id: 7, name: 'Promoción 7', imgSrc: './images/20210810_164116.jpg' },
  { id: 8, name: 'Promoción 8', imgSrc: './images/20210810_164125.jpg' },
];

const Promotions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calcula el índice de las promociones a mostrar
  const indexOfLastPromotion = currentPage * itemsPerPage;
  const indexOfFirstPromotion = indexOfLastPromotion - itemsPerPage;
  const currentPromotions = promotions.slice(indexOfFirstPromotion, indexOfLastPromotion);

  // Función para manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const totalPages = Math.ceil(promotions.length / itemsPerPage);

  return (
    <main className="container">
      <h1 className="main-title">Nuestros Especiales del Mes</h1>
      <div className="main">
        {/* Muestra las promociones actuales */}
        {currentPromotions.map((promotion) => (
          <div className="promotion" key={promotion.id}>
            <img src={promotion.imgSrc} alt={promotion.name} />
            <p>{promotion.name}</p>
            <button>Detalles</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {/* Renderiza los botones de paginación */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className="page-button "
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Promotions;
