import './App.css';
import { useState } from "react";
import Square from './Square';

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  console.log(squares);


  const handlerClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = '0';
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null
  }

  const winner = calculateWinner(squares);
  console.log("dfgfds",winner);
  
  let status;
  if (winner) {
    status = 'Победитель: ' + winner;
  } else {
    status = 'Следущий игрок: ' + (xIsNext ? 'X' : '0');
  }

  return (
    <><div className='wrapper'>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handlerClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handlerClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handlerClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handlerClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handlerClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handlerClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handlerClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handlerClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handlerClick(8)} />
      </div>
    </div>
    </>
  )
}

export default Board
