// components/Header.js

import React from 'react';

const Header = () => {
  // Reemplaza esta URL con la URL específica de la imagen de helados que deseas de Unsplash
  const imageUrl = "https://source.unsplash.com/featured/?icecream";

  return (
    <div className="bg-no-repeat bg-cover bg-center h-32" style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  );
};

export default Header;
