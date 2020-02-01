import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, hasGuessed }) => {
  return (
    <section>
      <p>{quote.text}</p>
      <p>- {hasGuessed ? quote.source : '?????'}</p>
    </section>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired,
  hasGuessed: PropTypes.bool.isRequired
};

export default Quote;


