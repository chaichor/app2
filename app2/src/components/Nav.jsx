import React from "react";

const Nav = () => {
    return (
        <nav className="bg-white-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold text-blue-600">Mi primer nav</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/Bio" className="hover:text-gray-200">
                            Bio
                        </a>
                    </li>
                    <li>
                        <a href="/FormularioPage" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/TodoPage" className="hover:text-gray-200">
                            To do List
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;