import React, { useState } from 'react';
import './Navbar.css'; // Asegúrate de crear un archivo CSS para el estilo

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Cambia el estado para abrir o cerrar el menú
    };

    return (
        <div className="navbar">
            <div className="logo">Mi Aplicación</div>

            {/* Ícono de tres líneas */}
            <div className="menu-icon" onClick={handleMenuToggle}>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Menú desplegable */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#option1" className="menu-item">Opción 1</a>
                <a href="#option2" className="menu-item">Opción 2</a>
                <a href="#option3" className="menu-item">Opción 3</a>
            </div>
        </div>
    );
};

export default Navbar;
