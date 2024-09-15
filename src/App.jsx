import './App.css';

import Navbar from "./Navbar";
import Home from "./pages/Home"
import TicTacToe from "./pages/TicTacToe"
import MadLib from "./pages/MadLib"
import MagicEightBall from './pages/MagicEightBall';
import RockPaperScissors from "./pages/RockPaperScissors"

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/tictactoe":
      Component = TicTacToe;
      break;
    case "/madlib":
      Component = MadLib;
      break;
    case "/magiceightball":
      Component = MagicEightBall;
      break;
    case "/rockpaperscissors":
      Component = RockPaperScissors;
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}

export default App;