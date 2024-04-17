function Home() {
    return (
      <div className="bg-white">
        {/* Header Image */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ height: '24rem', backgroundImage: 'url(tu_imagen_del_restaurante_aquí)' }}>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6">Bienvenidos a Hamburguesito</h1>
                <h3 className="text-2xl mb-8">Experiencia culinaria inolvidable</h3>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Ver Menú
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 mb-8">
            Nuestro restaurante ofrece una experiencia gastronómica única. Con ingredientes siempre frescos y platos preparados por chefs de renombre, nos dedicamos a brindarle a nuestros clientes una experiencia que deleite sus sentidos. Visítanos para probar nuestros especialidades y disfrutar de un ambiente acogedor y un servicio excepcional.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  