import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/outline';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold text-gray-700">Hamburguesito</Link>
                
                <div className="flex-1 flex items-center justify-center sm:justify-start">
                    <div className="w-full">
                        <input type="search" className="w-full px-4 py-2 rounded-md" placeholder="Buscar platos o restaurantes" />
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <Link to="/cart" className="text-gray-700">
                        <ShoppingCartIcon className="h-6 w-6" />
                    </Link>

                    <div className="ml-4">
                        <UserCircleIcon className="h-6 w-6" />
                    </div>

                    <div className="ml-4">
                        <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <button type="button" className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200" aria-label="toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"></path>
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link to="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Soluciones</Link>
                <Link to="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Precios</Link>
                <Link to="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Recursos</Link>
            </div>
        </header>
    );
}

export default Header;
