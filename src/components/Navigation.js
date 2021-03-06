import React from 'react'
import './Navigation.css';
//Importamos Link para manejar la navegación:
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
            <h1><i class="fas fa-dna" /> Logo genérico</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/features">
                    <li>Features</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );

}

export default Navigation;