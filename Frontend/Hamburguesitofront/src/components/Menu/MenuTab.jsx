import React, { useState } from 'react';
const imageUrl = "https://source.unsplash.com/random/?glazed-salmon";
// Datos de ejemplo, reemplázalos con tus datos reales.
const menuItemsData = [
  {
    id: 1,
    category: 'Entradas',
    name: 'Miso Salmón glaseado',
    description: 'Miso de sal dulce con mantequilla',
    price: '€22,00',
    imageUrl: imageUrl, // Reemplaza con la URL de tu imagen
  },
  // ...otros elementos del menú...
];

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState('Entradas');
  const tabs = ['Entradas', 'Bebidas', 'Desserts', 'Cocktails'];

  return (
    <div className="max-w-md mx-auto pt-2">
      {/* Tabs del menú */}
      <div className="flex justify-around bg-white p-2 rounded-lg shadow-md mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`text-sm font-semibold ${activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Lista de elementos del menú */}
      <div className="mt-4">
        {menuItemsData.filter(item => item.category === activeTab).map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-gray-800">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTab;
