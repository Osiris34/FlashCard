import React, { useState } from 'react';
import CardUI from './CardUI';

const FlashCards = () => {
  const cardPairs = [
    { id: 1, question: 'How long is a standard basketball game?', answer: '4 quarters of 12 minutes each' },
    { id: 2, question: 'What is the regulation height of a basketball hoop?', answer: '10 feet' },
    { id: 3, question: 'How many players are on the court for each team?', answer: '5 players' },
    { id: 4, question: 'What is a jump ball?', answer: 'A method used to begin or resume play in basketball' },
    { id: 5, question: 'What is a shot clock?', answer: 'A timer used to limit the time a team has possession of the ball' },
    { id: 6, question: 'What is a free throw worth?', answer: '1 point' },
    { id: 7, question: 'What is a three-pointer?', answer: 'A field goal made from beyond the three-point line' },
    { id: 8, question: 'What is a backcourt violation?', answer: 'Crossing the half-court line without the ball after establishing possession' },
    { id: 9, question: 'How long is the key (paint) in basketball?', answer: '16 feet' },
    { id: 10, question: 'What is a double dribble?', answer: 'Dribbling the ball, stopping, and then starting to dribble again' },
  ];

  const [isFlipped, setIsFlipped] = useState(false); 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="flashcards-app">
      <h1>Learn Basketball Like a Pro</h1>
      <p>{`Description: Ten common rules To learn basketball`}</p>
      <p>{`Total Cards: ${cardPairs.length}`}</p>
      <CardUI card={cardPairs[currentCardIndex]} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default FlashCards;