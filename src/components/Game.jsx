/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "../helpers/calculateWiner";

export const Game = () => {
  // Array(9).fill(null) crea un array de 9 elementos con valor null
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [gameStatus, setgameStatus] = useState("iniciar juego");

  const handlePlay = (squareIdx) => {
    // actualizar estado de los cuadros
    // inmutabilidad: Evitar la mutación directa de los datos permite mantener intacta las versiones previas de los datos y reutilizarlas más adelante.
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[squareIdx] = "X") : (nextSquares[squareIdx] = "O");
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  };

  useEffect(() => {
    console.log(history);
  }, [history]);

  const handleGameStatus = () => {
    const winner = calculateWinner(squares);
    if (winner) {
      setgameStatus(`Ya hay un ganador: ${winner}`);
      setTimeout(() => {
        setSquares(Array(9).fill(null));
        setgameStatus("iniciar juego");
      }, 1000);
    } else if (squares.some((square) => square != null)) {
      setgameStatus(`Siguiente jugador: ${xIsNext ? "X" : "O"}`);
    } else {
      setgameStatus("iniciar juego");
    }
  };

  // history

  const jumpTo = (moveIdx) => {
    setSquares(history[moveIdx]);
    setHistory(history.slice(0, moveIdx + 1));
    // movimiento de x: pares | movimiento de o: impares
    setxIsNext(moveIdx % 2 === 0);
  };

  const moves = history.map((_, move) => {
    /*
        el argumento squares recorre cada elemento de history, 
        y el argumento move recorre cada índice de la matriz: 0, 1, 2, ….

         necesitas especificar una propiedad key para cada elemento de la lista 
         y así diferenciar cada elemento de la lista de sus hermanos

         Cuando se vuelve a representar una lista, React toma la key de cada elemento de la 
         lista y busca en los elementos de la lista anterior una key coincidente. Si la lista 
         actual tiene una key que no existía antes, React crea un componente. Si a la lista 
         actual le falta una key que existía en la lista anterior, React destruye el componente anterior.
          Si dos keys coinciden, se mueve el componente correspondiente.
    */
    const desc = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={Math.random()}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          onPlay={handlePlay}
          onGameStatus={handleGameStatus}
          gameStatus={gameStatus}
          squares={squares}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
