import "./rockpaper.css";
import { useState } from "react";

export default function RockPaperGame() {
const [userScore, setUserScore] = useState(0);
const [computerScore, setComputerScore] = useState(0);
const [message, setMessage] = useState("Let the game begin!");

const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const convertToWord = letter => {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
};

const handleClick = (choice) => {
  const botChoice = getComputerChoice();
  switch (choice + botChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(choice, botChoice);
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      lose(choice, botChoice);
      break;
    case 'ss':
    case 'pp':
    case 'rr':
      draw(choice, botChoice);
  };
};

const applyGlow = (element, className) => {
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), 1000); 
};

const win = (choice, botChoice) => {
 setUserScore(userScore + 1);
  setMessage(`${convertToWord(choice)} beats ${convertToWord(botChoice)}. You win! 🔥`);
};

const lose = (choice, botChoice) => {
  setComputerScore(computerScore + 1);
  setMessage(`${convertToWord(choice)} loses to ${convertToWord(botChoice)}. You lose! 💩`);
};

const draw = (choice, botChoice) => {
  setMessage(`${convertToWord(choice)} and ${convertToWord(botChoice)}: It's a draw! 🤷`);
};

const handleReset = () => {
  setUserScore(0);
  setComputerScore(0);
  setMessage("Let the game begin!");
}

  return (
    <div id="rockpapergame">

      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <div className="scoreboard">
        <div className="badge" id="user-label">
          user
        </div>
        <div className="badge" id="bot-label">
          bot
        </div>
        <span id="user-score">{userScore}</span>:<span id="computer-score">{computerScore}</span>
      </div>
      <div className="result">
        <p>{message}</p>
      </div>

      <div className="choices">
        <div className="choice" id="r">
          <img src="/rock-paper-imgs/rock.png" value="rock" onClick={()=>handleClick('r')}/>
        </div>
        <div className="choice" id="p">
          <img src="/rock-paper-imgs/paper.png" value="paper" onClick={()=>handleClick('p')}/>
        </div>
        <div className="choice" id="s">
          <img src="/rock-paper-imgs/scissors.png" value="scissors" onClick={()=>handleClick('s')} />
        </div>
      </div>

      <p id="action-message">Make your move.</p>
      
      <div className="reset">
        <button id="reset-btn" onClick={handleReset}>Reset</button>
      </div>

    </div>
  );
}
