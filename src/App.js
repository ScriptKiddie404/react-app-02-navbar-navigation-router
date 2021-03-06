import React from 'react';
// Importamos todos los componentes que vamos a agregar en la navegación:
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import About from './pages/About';
// Importamos el CSS:
import './App.css';

const App = () => {
    return (
        <>
            <Navigation />
            <Home styleType="page__container" styleTitle="page__title" />
        </>
    );
}

export default App;