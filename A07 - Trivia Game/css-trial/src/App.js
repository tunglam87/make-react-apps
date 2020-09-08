import React from 'react';
import CategorySelector from './components/CategorySelector';
import Scoreboard from './components/Scoreboard';
import Question from './components/Question';
import ResultModal from './components/ResultModal';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <ResultModal /> */}
      <h2>Trivia!</h2>
      <div className="question-header">
        <CategorySelector />
        <Scoreboard />
      </div>
      <div className="question-main">
        <Question />
      </div>
      <div className="question-footer">
        <button>Go to next question</button>
      </div>
    </div>
  );
}

export default App;
