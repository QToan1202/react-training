import React from 'react';
import PropTypes from 'prop-types'

export default function Card({ card: { id, title, content, date } }) {
  return (
    <div className='card'>
      <h1 className='card__title'>{title}</h1>
      <p className='card__content'>{content}</p>
      <p className='card__date'>{date}</p>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
  }),
}