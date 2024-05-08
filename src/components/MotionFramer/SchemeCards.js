import React, { useState } from 'react';
import MotionFramer from './MotionFramer';
import './motion.scss';

const SchemeCards = () => {
  const [openCard, setOpenCard] = useState(null);
  const cards = ['Scheme 1', 'Scheme 2', 'Scheme 3'];

  const handleCardClick = index => {
    if (openCard === index) {
      setOpenCard(null);
    } else {
      setOpenCard(index);
    }
  };
  return (
    <div className='mainCard'>
      {cards.map((card, index) => (
        <MotionFramer
          key={index}
          label={card}
          isOpen={openCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

export default SchemeCards