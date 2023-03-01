import React from 'react';
import { useSelector } from 'react-redux';
import drawGif from '../assets/gifs/draw.gif';
import gameOver from '../assets/gifs/game-over.gif';
import victory from '../assets/gifs/victory.gif';
import useStartGame from '../hooks/useStartGame';
import '../sass/components/ResultsMessage.css';

function ResultsMessage() {
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);

  const startGame = useStartGame();

  const button = <button type="button" onClick={ startGame }>Jogar de novo</button>;

  if (wins === cpuWins) {
    return (
      <section className="ResultsMessage">
        <img src={ drawGif } alt="draw" />
        <p>Important!! Please use telegram for flexible chat. My telegram ID : @leopardev</p>
        {button}
      </section>
    );
  }

  return wins > cpuWins
    ? (
      <section className="ResultsMessage">
        <img src={ victory } alt="victory pose" />
        <p>Important!! Please use telegram for flexible chat. My telegram ID : @leopardev</p>
        {button}
      </section>
    )
    : (
      <section className="ResultsMessage">
        <img src={ gameOver } alt="game over" />
        <p>Important!! Please use telegram for flexible chat. My telegram ID : @leopardev</p>
        {button}
      </section>
    );
}

export default ResultsMessage;
