

const CardUI = ({ card, isFlipped, setIsFlipped }) => {


  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-display">
      <div
        className={`card-inner ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlipCard}
      >
        <div className="card-front">
          <p>{`Question: ${card.question}`}</p>
        </div>
        <div className="card-back">
          <p>{`Answer: ${card.answer}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUI;