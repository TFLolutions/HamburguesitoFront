import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 pt-10 pb-6">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 text-center md:text-left">
                        <h5 className="uppercase mb-6 font-bold">Links</h5>
                        <ul className="mb-4">
                            <li className="mt-2">
                                <Link to="/about" className="hover:underline text-gray-400 hover:text-gray-300">Sobre nosotros</Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/menu" className="hover:underline text-gray-400 hover:text-gray-300">Menú</Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/contact" className="hover:underline text-gray-400 hover:text-gray-300">Contacto</Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/blog" className="hover:underline text-gray-400 hover:text-gray-300">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 text-center md:text-left">
                        <h5 className="uppercase mb-6 font-bold">Contacto</h5>
                        <ul className="mb-4">
                            <li className="mt-2">
                                <span className="hover:underline text-gray-400 hover:text-gray-300">123-456-7890</span>
                            </li>
                            <li className="mt-2">
                                <span className="hover:underline text-gray-400 hover:text-gray-300">info@restaurante.com</span>
                            </li>
                            <li className="mt-2">
                                <span className="hover:underline text-gray-400 hover:text-gray-300">Calle del Restaurante, 123</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 text-center md:text-left">
                        <h5 className="uppercase mb-6 font-bold">Síguenos</h5>
                        <div className="flex justify-center md:justify-start">
                            {/* Aquí puedes añadir iconos de redes sociales */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 text-center md:text-left">
                        <h5 className="uppercase mb-6 font-bold">Newsletter</h5>
                        <div>
                            <form>
                                <input type="email" className="px-3 py-2 bg-gray-700 text-white" placeholder="Tu correo electrónico"/>
                                <button className="px-3 py-2 bg-red-600 hover:bg-red-700">Suscribirse</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-700 pt-4 mt-4">
                <div className="flex pb-5 px-6 m-auto pt-5 border-t text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        © 2024 Restaurante de Comidas. Todos los derechos reservados.
                    </div>
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        {/* Agregar enlaces a políticas, etc. */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
