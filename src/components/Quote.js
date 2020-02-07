import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => {
  return (
    <section>
      <p>{quote.text}</p>
      <p>- {quote.source}</p>
    </section>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired
};

export default Quote;


