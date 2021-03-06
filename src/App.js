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

/*

    Esta es una navegación común y corriente (sin pasar propiedades a los elementos del Route):
            <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/features" component={Features} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </>

    A continuación se expone el ejemplo mencionado en el README.md pasando propiedades al elemento.

*/

const App = () => {

    // En este caso usaremos el mismo estilo para todas las páginas, por lo tanto es más conveniente crear algunas constantes:

    const pageClass = "page__container";
    const titleClass = "page__title";

    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" render={() => <Home styleType={pageClass} styleTitle={titleClass} />} />
                    <Route exact path="/features" render={() => <Features styleType={pageClass} styleTitle={titleClass} />} />
                    <Route exact path="/contact" render={() => <Contact styleType={pageClass} styleTitle={titleClass} />} />
                    <Route exact path="/about" render={() => <About styleType={pageClass} styleTitle={titleClass} />} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
