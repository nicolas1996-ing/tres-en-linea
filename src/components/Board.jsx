/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Square } from "./Square";
import { useEffect } from "react";

export const Board = ({
  squares,
  onPlay,
  gameStatus,
  onGameStatus,
}) => {

  const handleClick = (squareIdx) => {
    // Determinar si la posicion ya fue ocupada
    if (squares[squareIdx] != null) {
      alert("Ese cuadro ya esta ocupado");
      return;
    }
    onPlay(squareIdx);
  };

  useEffect(() => {
    // Determinar el ganador
    onGameStatus();
  }, squares);

  return (
    <>
      <div className="container">
        <h1 className="title">tres-en-linea</h1>
        <div>
          <div className="board-row">
            {squares.slice(0, 3).map((squareValue, i) => (
              <Square
                key={Math.random()}
                value={squareValue}
                onSquareClick={() => handleClick(i)}
              />
            ))}
          </div>
          <div className="board-row">
            {squares.slice(3, 6).map((squareValue, i) => (
              <Square
                key={Math.random()}
                value={squareValue}
                onSquareClick={() => handleClick(i + 3)}
              />
            ))}
          </div>
          <div className="board-row">
            {squares.slice(6, 9).map((squareValue, i) => (
              <Square
                key={Math.random()}
                value={squareValue}
                onSquareClick={() => handleClick(i + 6)}
              />
            ))}
          </div>
        </div>
        <div>{gameStatus}</div>
      </div>
    </>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
  - En lugar de copiar y pegar, la arquitectura de componentes de React te permite crear un componente 
    reutilizable para evitar el código duplicado desordenado.
  - Para recopilar datos de varios elementos secundarios o para que dos componentes 
    secundarios se comuniquen entre sí, declara el estado compartido en tu componente principal. 
    El componente padre puede devolver ese estado a los hijos a través de props. 
    Esto mantiene los componentes secundarios sincronizados entre sí y con el componente principal.

  Manejo de estado 
   Al hacer clic en un Square, el componente secundario Square ahora le pide al componente principal Board que actualice 
    el estado del tablero. Cuando el estado de Board cambia, tanto el componente Board como todos los componentes secundarios 
    Square se vuelven a renderizar automáticamente. Mantener el estado de todos los cuadrados en el componente Board te permite 
    determinar el ganador en el futuro.

    - Al hacer clic en el cuadrado superior izquierdo, se ejecuta la función que el button recibe como prop onClick del Square.
       El componente Square recibe esa función como una prop onSquareClick del Board. El componente Board define esa 
       función directamente en el JSX. Llama a handleClick con un argumento de 0.
    - handleClick usa el argumento (0) para actualizar el primer elemento de la matriz squares de null a X.
    - El estado squares del componente Board se actualiza, por lo que Board y todos sus elementos secundarios se
       vuelven a renderizar. Esto hace que la prop value del componente Square con el índice 0 cambie de null a X.

  Buenas practicas:
    - En React, es convencional usar nombres on[Event] para props que representan eventos 
      y handle[Event] para las definiciones de funciones que controlan los eventos.
*/
