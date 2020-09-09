import React from 'react';

export default function ResultModal() {
  return (
    <div>
      <div className="result-modal">
        <div className="overlay" />
        <div className="result-modal-content">
          <h3>
            Yeah!
            <br />
            YOU WON!
          </h3>

          <h3>
            OH....
            <br />
            YOU LOST!
          </h3>
          <div className="correct-answer">
            <small>The correct answer was:</small>
            <br />
            <strong>Answer here</strong>
          </div>
          <button>Go to next question</button>
        </div>
      </div>
    </div>
  );
}
