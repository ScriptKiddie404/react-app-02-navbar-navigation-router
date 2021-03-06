# Navegación a través de React Router.

## Introducción:
Este pequeño repositorio es para fines educativos, son mis notas y mis ejemplos para implementar la navegación en React.js de forma rápida, así mismo, este repositorio lo utilizaré como una referencia rápida a mis distintas dudas sobre este tema (odio googlear dos veces la misma cosa, así que prefiero dejar mis notas en este lugar y poder hacer copy/paste *justificado* de algo que otrora implementé yo mismo.).

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
4. 