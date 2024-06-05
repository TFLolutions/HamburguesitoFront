import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow relative">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/HamburguesitAppIcon.PNG" className="h-8 w-8" alt="Logo" />
                    <Link to="/" className="text-3xl ml-2 font-bold text-gray-700">Hamburguesito</Link>
                </div>

                <div className="flex-1 flex items-center justify-center sm:justify-start">
                    <div className="w-full sm:block hidden">
                        <input type="search" className="w-full px-4 py-2 ml-2 rounded-md border-2 border-black focus:border-black focus:ring-0" placeholder="Buscar platos o comidas" />
                    </div>
                </div>

                <div className="ml-4 flex items-center justify-end">
                    <Link to="/cart" className="text-gray-700">
                        <AiOutlineShoppingCart className="h-6 w-6" />
                    </Link>

                    <div className="ml-2">
                        <AiOutlineUser className="h-6 w-6" />
                    </div>

                    <div className="ml-2 md:hidden">
                        <AiOutlineMenu className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="flex justify-between items-center p-4">
                    <span className="text-xl font-bold">Menú</span>
                    <AiOutlineClose className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                </div>
                <nav className="flex flex-col p-4">
                    <Link to="/news" className="py-2 flex items-center hover:bg-gray-700 rounded-md">
                        <AiOutlineSearch className="h-6 w-6 mr-2" />
                        Últimas Novedades
                    </Link>
                    <Link to="/best-sell" className="py-2 flex items-center hover:bg-gray-700 rounded-md">
                        <AiOutlineSearch className="h-6 w-6 mr-2" />
                        Los más vendidos
                    </Link>
                    <Link to="/onTop" className="py-2 flex items-center hover:bg-gray-700 rounded-md">
                        <AiOutlineSearch className="h-6 w-6 mr-2" />
                        Productos del momento
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
