import React from 'react';

const sampleAnswers = ['one', 'two', 'three', 'four'];

export default function Question() {
  return (
    <div className="question">
      <h2>Question here</h2>
      {sampleAnswers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}
