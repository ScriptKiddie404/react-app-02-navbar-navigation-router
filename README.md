# Navegación a través de React Router.

## Introducción:
Este pequeño repositorio es para fines educativos sobre un determinado tema, son mis notas y mis ejemplos para implementar la navegación en React.js de forma rápida, así mismo, este repositorio lo utilizaré como una referencia rápida a mis distintas dudas sobre este tema (odio googlear dos veces la misma cosa, así que prefiero dejar mis notas en este lugar y poder hacer copy/paste *justificado* de algo que otrora implementé yo mismo.).

***

## ¿Cómo se maneja la navegación en React.js?

A diferencia de la navegación convencial que hacemos en HTML5 con eitquetas anchor (`<a></a>`), en React.js la cosa es un poco diferente.

Una forma rápida para implementar la navegación es instalar el paquete [react-router-dom](https://www.npmjs.com/package/react-router-dom) directamente de los repositorios a través de npm.

```javascript
npm i react-router-dom
```

## Ejemplo:

Imaginemos que tenemos nuestro archivo `App.js` en el que implementaremos la navegación. Primero que nada vamos a crear cuatro páginas genéricas:

* Home
* Features
* Contact
* About us
  
Y claro, también vamos a crear una barra de navegación la cual será encargada de navegar a través de estos links.

Ahora sólo es cuestión de seguir los siguientes pasos:

1. Importar `BrowserRouter`, `Switch` y `Route` del paquete `react-router-dom`.
2. Le podemos dar un alias al `BrowserRouter`: 
    ```javascript
        import {BrowserRouter as Router} from 'react-router-dom'
    ```
3. En `App.js` ingresamos todo el contenido que vamos a enrutar con la etiqueta `<Router></Router>`.
4. Ahora con el componente Route agregamos cada componente y la ruta, así mismo nos aseguramos de tener cada Router dentro de un Switch:
    ```JSX
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/ruta" component={nombre_componente}/>
                <Route exact path="/otra_ruta" component={nombre_componente}/>
            </Switch>
        </Router>
    ```
5. Si de pura casualidad neecesitamos mandar algún tipo de propiedad al componente, debemos asegurarnos de usar la propiedad `render` del Route:
    ```JSX
        <Route exact path="/" render={() => <Componente propiedad="algo"/>}/>
    ```
6. Ahora sólo debemos envolver en un `<Link></Link>` aquellos elementos que actúan como un **enlace**, tanto en la barra de navegación como en cualquier otro elemento en nuestra página que se dedique a ello (llevarnos a otra página dentro del sitio). También es importante recordar que debemos importar Link desde `react-router-dom`.