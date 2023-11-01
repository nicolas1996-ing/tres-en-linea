/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

/*
 En React, un componente es una pieza de código reutilizable que representa una parte de una interfaz de usuario.
 Los componentes se utilizan para representar, administrar y actualizar los elementos de la interfaz de usuario
 en su aplicación

 - La palabra clave de JavaScript export hace que esta función sea accesible fuera de este archivo.
 - La palabra clave default le dice a otros archivos que usan su código que es la función principal en su archivo.
 -  La palabra clave de JavaScript return significa que lo que viene después se devuelve como un valor a la persona que llama a la función
 - Los componentes de React deben devolver un solo elemento JSX y no múltiples elementos JSX adyacentes como dos botones. Para solucionar esto, 
    puedes usar fragmentos (<> y </>) para envolver múltiples elementos JSX adyacentes 
 -  Para «escapar a JavaScript» desde JSX, necesitas llaves
 - Al llamar a esta función set desde un controlador onClick, 
    le estás diciendo a React que vuelva a renderizar ese Square cada vez que se hagas clic en <button>
 - Ten en cuenta que cada Square tiene su propio estado: el value almacenado en cada Square es completamente independiente de los demás

 React Developer Tools 
    - React Developer Tools 
    - Para el desarrollo local, React DevTools está disponible como Chrome, Firefox, y Edge extensión del navegador. Después de instalarlo, 
        la pestaña Componentes aparecerá en las Herramientas de desarrollo de tu navegador para los sitios que utilizan React.
 - Dado que el estado es privado para el componente que lo define
*/
export const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};
