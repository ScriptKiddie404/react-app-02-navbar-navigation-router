import React from 'react';
// Importamos todos los componentes que vamos a agregar en la navegación:
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import About from './pages/About';
// Importamos el CSS:
import './App.css';
// Importamos todo lo necesario de react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    {/* <Home styleType="page__container" styleTitle="page__title" /> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/features" component={Features} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </>
    );
}

export default App;