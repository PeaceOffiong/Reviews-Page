import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length -1
    } 

    if (number > people.length - 1) {
      return 0
    }
    return number
  }

  const prevPerson = () => {
      setIndex(() => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });  
  };

  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  }

  const randomPerson = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * people.length)
      return checkNumber(newIndex);
    })
  }

  return <>
    <div className='img-container'>
      <img src={image} alt={name} className="person-img" />
      <div className='quote-icon'>
        <FaQuoteRight/>
      </div>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>
      random button
    </button>
  </>;
};

export default Review;
